-- Contact form submissions table
-- Suitable for PostgreSQL.

CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(254) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT contact_messages_status_check
    CHECK (status IN ('new', 'read', 'replied', 'archived'))
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_status
  ON contact_messages (status);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
  ON contact_messages (created_at);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public contact form inserts" ON contact_messages;

CREATE POLICY "Allow public contact form inserts"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);
