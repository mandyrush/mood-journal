-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "Analysis" (
	"id" text PRIMARY KEY NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"entryId" text NOT NULL,
	"mood" text NOT NULL,
	"summary" text NOT NULL,
	"color" text NOT NULL,
	"negative" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" text PRIMARY KEY NOT NULL,
	"clerkId" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"email" text NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "JournalEntry" (
	"id" text PRIMARY KEY NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"userId" text NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "Analysis_entryId_key" ON "Analysis" USING btree ("entryId" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "User_clerkId_key" ON "User" USING btree ("clerkId" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "User_email_key" ON "User" USING btree ("email" text_ops);--> statement-breakpoint
CREATE INDEX "JournalEntry_userId_idx" ON "JournalEntry" USING btree ("userId" text_ops);
*/