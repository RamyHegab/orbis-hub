-- ══════════════════════════════════════════════
-- ORBIS — Complete Database Schema
-- ══════════════════════════════════════════════

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- ── UNIVERSITIES ──
create table if not exists universities (
  id            uuid primary key default uuid_generate_v4(),
  name          text not null,
  short_name    text,
  country       text default 'United Kingdom',
  city          text,
  logo_url      text,
  primary_color text default '#2d7a6e',
  domain        text,
  active        boolean default true,
  created_at    timestamptz default now()
);

-- ── USERS ──
create table if not exists users (
  id              uuid primary key references auth.users(id) on delete cascade,
  university_id   uuid references universities(id),
  full_name       text,
  email           text,
  role            text check (role in ('officer','regional_manager','hod','admin','agent')) default 'officer',
  region          text,
  initials        text,
  avatar_url      text,
  active          boolean default true,
  created_at      timestamptz default now()
);

-- ── AGENTS ──
create table if not exists agents (
  id              uuid primary key default uuid_generate_v4(),
  university_id   uuid references universities(id),
  code            text,
  name            text not null,
  legal_name      text,
  officer         text,
  officer_id      uuid references users(id),
  hq_country      text,
  hq_city         text,
  hq_address      text,
  website         text,
  agreement_start date,
  agreement_end   date,
  status          text default 'active' check (status in ('active','inactive','suspended')),
  education_provider text,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- ── AGENT COUNTRIES ──
create table if not exists agent_countries (
  id          uuid primary key default uuid_generate_v4(),
  agent_id    uuid references agents(id) on delete cascade,
  country     text not null
);

-- ── BRANCHES ──
create table if not exists branches (
  id              uuid primary key default uuid_generate_v4(),
  agent_id        uuid references agents(id) on delete cascade,
  university_id   uuid references universities(id),
  name            text,
  city            text,
  country         text,
  address         text,
  lat             numeric,
  lng             numeric,
  google_maps_url text,
  is_headquarters boolean default false,
  created_at      timestamptz default now()
);

-- ── CONTACTS ──
create table if not exists contacts (
  id              uuid primary key default uuid_generate_v4(),
  agent_id        uuid references agents(id) on delete cascade,
  branch_id       uuid references branches(id) on delete set null,
  university_id   uuid references universities(id),
  full_name       text,
  role            text,
  email           text,
  phone           text,
  tags            text[] default '{}',
  is_primary      boolean default false,
  created_at      timestamptz default now()
);

-- ── TRIPS ──
create table if not exists trips (
  id              uuid primary key default uuid_generate_v4(),
  university_id   uuid references universities(id),
  officer_id      uuid references users(id),
  title           text not null,
  country         text,
  date_from       date,
  date_to         date,
  status          text default 'draft' check (status in ('draft','planned','active','completed','archived')),
  ai_report       text,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- ── TRIP DAYS ──
create table if not exists trip_days (
  id          uuid primary key default uuid_generate_v4(),
  trip_id     uuid references trips(id) on delete cascade,
  day_number  integer,
  date        date,
  label       text,
  sort_order  integer default 0
);

-- ── ACTIVITIES ──
create table if not exists activities (
  id              uuid primary key default uuid_generate_v4(),
  trip_day_id     uuid references trip_days(id) on delete cascade,
  trip_id         uuid references trips(id) on delete cascade,
  university_id   uuid references universities(id),
  type            text check (type in ('travel','agent_visit','fair','school_visit','rest','other')),
  name            text,
  time_from       time,
  time_to         time,
  status          text default 'planned' check (status in ('planned','completed','cancelled')),
  -- Travel fields
  travel_from     text,
  travel_to       text,
  travel_method   text,
  airline         text,
  travel_ref      text,
  dep_time        time,
  arr_time        time,
  block_day       boolean default false,
  -- Location
  agent_id        uuid references agents(id),
  branch_id       uuid references branches(id),
  venue_name      text,
  venue_address   text,
  org_type        text,
  -- Rest
  rest_type       text,
  -- Other
  loc_text        text,
  purpose         text,
  notes           text,
  sort_order      integer default 0,
  created_at      timestamptz default now()
);

-- ── VISIT NOTES ──
create table if not exists visit_notes (
  id              uuid primary key default uuid_generate_v4(),
  activity_id     uuid references activities(id) on delete cascade,
  trip_id         uuid references trips(id) on delete cascade,
  university_id   uuid references universities(id),
  officer_id      uuid references users(id),
  content         text,
  ai_summary      text,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- ── FORMS ──
create table if not exists forms (
  id              uuid primary key default uuid_generate_v4(),
  university_id   uuid references universities(id),
  trip_id         uuid references trips(id),
  activity_id     uuid references activities(id),
  title           text not null,
  activity_label  text,
  fields          jsonb default '[]',
  intakes         text[] default '{}',
  archived        boolean default false,
  archived_date   date,
  created_at      timestamptz default now()
);

-- ── FORM ENTRIES ──
create table if not exists form_entries (
  id              uuid primary key default uuid_generate_v4(),
  form_id         uuid references forms(id) on delete cascade,
  university_id   uuid references universities(id),
  data            jsonb default '{}',
  submitted_at    timestamptz default now(),
  submitted_by    text default 'officer'
);

-- ── SCHOOLS ──
create table if not exists schools (
  id              uuid primary key default uuid_generate_v4(),
  university_id   uuid references universities(id),
  name            text not null,
  city            text,
  country         text default 'United Kingdom',
  address         text,
  logo_url        text,
  website         text,
  courses_count   integer default 0,
  description     text,
  contact_name    text,
  contact_email   text,
  contact_phone   text,
  created_at      timestamptz default now()
);

-- ── TRIP CHECKLIST STEPS ──
create table if not exists trip_checklist (
  id          uuid primary key default uuid_generate_v4(),
  trip_id     uuid references trips(id) on delete cascade,
  label       text not null,
  sub         text,
  state       text default 'lock' check (state in ('done','curr','lock','freight')),
  badge       text,
  sort_order  integer default 0
);

-- ══════════════════════════════════════════════
-- ROW LEVEL SECURITY
-- ══════════════════════════════════════════════

alter table universities    enable row level security;
alter table users           enable row level security;
alter table agents          enable row level security;
alter table agent_countries enable row level security;
alter table branches        enable row level security;
alter table contacts        enable row level security;
alter table trips           enable row level security;
alter table trip_days       enable row level security;
alter table activities      enable row level security;
alter table visit_notes     enable row level security;
alter table forms           enable row level security;
alter table form_entries    enable row level security;
alter table schools         enable row level security;
alter table trip_checklist  enable row level security;

-- ── HELPER FUNCTION — get current user's university_id ──
create or replace function get_my_university_id()
returns uuid language sql stable as $$
  select university_id from users where id = auth.uid()
$$;

-- ── HELPER FUNCTION — get current user's role ──
create or replace function get_my_role()
returns text language sql stable as $$
  select role from users where id = auth.uid()
$$;

-- ── UNIVERSITIES — users see only their own ──
create policy "users see own university"
  on universities for select
  using (id = get_my_university_id());

-- ── USERS — see colleagues in same university ──
create policy "users see own university users"
  on users for select
  using (university_id = get_my_university_id());

create policy "users update own profile"
  on users for update
  using (id = auth.uid());

-- ── AGENTS — scoped to university ──
create policy "agents select"
  on agents for select
  using (university_id = get_my_university_id());

create policy "agents insert"
  on agents for insert
  with check (university_id = get_my_university_id());

create policy "agents update"
  on agents for update
  using (university_id = get_my_university_id());

create policy "agents delete"
  on agents for delete
  using (university_id = get_my_university_id()
    and get_my_role() in ('admin','hod'));

-- ── AGENT COUNTRIES ──
create policy "agent_countries select"
  on agent_countries for select
  using (agent_id in (
    select id from agents where university_id = get_my_university_id()
  ));

create policy "agent_countries insert"
  on agent_countries for insert
  with check (agent_id in (
    select id from agents where university_id = get_my_university_id()
  ));

create policy "agent_countries delete"
  on agent_countries for delete
  using (agent_id in (
    select id from agents where university_id = get_my_university_id()
  ));

-- ── BRANCHES ──
create policy "branches select"
  on branches for select
  using (university_id = get_my_university_id());

create policy "branches insert"
  on branches for insert
  with check (university_id = get_my_university_id());

create policy "branches update"
  on branches for update
  using (university_id = get_my_university_id());

create policy "branches delete"
  on branches for delete
  using (university_id = get_my_university_id());

-- ── CONTACTS ──
create policy "contacts select"
  on contacts for select
  using (university_id = get_my_university_id());

create policy "contacts insert"
  on contacts for insert
  with check (university_id = get_my_university_id());

create policy "contacts update"
  on contacts for update
  using (university_id = get_my_university_id());

create policy "contacts delete"
  on contacts for delete
  using (university_id = get_my_university_id());

-- ── TRIPS ──
create policy "trips select"
  on trips for select
  using (university_id = get_my_university_id());

create policy "trips insert"
  on trips for insert
  with check (university_id = get_my_university_id());

create policy "trips update"
  on trips for update
  using (university_id = get_my_university_id());

create policy "trips delete"
  on trips for delete
  using (university_id = get_my_university_id()
    and get_my_role() in ('admin','hod','regional_manager'));

-- ── TRIP DAYS ──
create policy "trip_days select"
  on trip_days for select
  using (trip_id in (
    select id from trips where university_id = get_my_university_id()
  ));

create policy "trip_days insert"
  on trip_days for insert
  with check (trip_id in (
    select id from trips where university_id = get_my_university_id()
  ));

create policy "trip_days update"
  on trip_days for update
  using (trip_id in (
    select id from trips where university_id = get_my_university_id()
  ));

create policy "trip_days delete"
  on trip_days for delete
  using (trip_id in (
    select id from trips where university_id = get_my_university_id()
  ));

-- ── ACTIVITIES ──
create policy "activities select"
  on activities for select
  using (university_id = get_my_university_id());

create policy "activities insert"
  on activities for insert
  with check (university_id = get_my_university_id());

create policy "activities update"
  on activities for update
  using (university_id = get_my_university_id());

create policy "activities delete"
  on activities for delete
  using (university_id = get_my_university_id());

-- ── VISIT NOTES ──
create policy "notes select"
  on visit_notes for select
  using (university_id = get_my_university_id());

create policy "notes insert"
  on visit_notes for insert
  with check (university_id = get_my_university_id());

create policy "notes update"
  on visit_notes for update
  using (university_id = get_my_university_id());

-- ── FORMS ──
create policy "forms select"
  on forms for select
  using (university_id = get_my_university_id());

create policy "forms insert"
  on forms for insert
  with check (university_id = get_my_university_id());

create policy "forms update"
  on forms for update
  using (university_id = get_my_university_id());

create policy "forms delete"
  on forms for delete
  using (university_id = get_my_university_id());

-- ── FORM ENTRIES ──
create policy "entries select"
  on form_entries for select
  using (university_id = get_my_university_id());

create policy "entries insert"
  on form_entries for insert
  with check (university_id = get_my_university_id());

create policy "entries delete"
  on form_entries for delete
  using (university_id = get_my_university_id()
    and get_my_role() in ('admin','hod','officer','regional_manager'));

-- ── SCHOOLS ──
create policy "schools select"
  on schools for select
  using (university_id = get_my_university_id());

create policy "schools insert"
  on schools for insert
  with check (university_id = get_my_university_id());

create policy "schools update"
  on schools for update
  using (university_id = get_my_university_id());

-- ── TRIP CHECKLIST ──
create policy "checklist select"
  on trip_checklist for select
  using (trip_id in (
    select id from trips where university_id = get_my_university_id()
  ));

create policy "checklist insert"
  on trip_checklist for insert
  with check (trip_id in (
    select id from trips where university_id = get_my_university_id()
  ));

create policy "checklist update"
  on trip_checklist for update
  using (trip_id in (
    select id from trips where university_id = get_my_university_id()
  ));

-- ══════════════════════════════════════════════
-- SEED DATA — University of Lincoln (pilot)
-- ══════════════════════════════════════════════

insert into universities (id, name, short_name, country, city, active)
values (
  '00000000-0000-0000-0000-000000000001',
  'University of Lincoln',
  'Lincoln',
  'United Kingdom',
  'Lincoln',
  true
) on conflict (id) do nothing;

