-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other', 'prefer_not_to_say');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('id', 'en');

-- CreateEnum
CREATE TYPE "ProgressStatus" AS ENUM ('locked', 'available', 'completed');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('multiple_choice', 'true_false', 'camera_practice');

-- CreateEnum
CREATE TYPE "QuestStatus" AS ENUM ('in_progress', 'achieved', 'claimed');

-- CreateEnum
CREATE TYPE "QuestTargetType" AS ENUM ('levels_completed', 'streak_days', 'words_collected', 'perfect_scores');

-- CreateEnum
CREATE TYPE "AttemptStatus" AS ENUM ('pending', 'answered', 'timeout');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT,
    "username" TEXT,
    "google_id" TEXT,
    "active_avatar_id" TEXT,
    "preferred_language" "Language" NOT NULL DEFAULT 'id',
    "age" INTEGER,
    "gender" "Gender",
    "onboarding_completed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_stats" (
    "user_id" TEXT NOT NULL,
    "total_xp" INTEGER NOT NULL DEFAULT 0,
    "currency_balance" INTEGER NOT NULL DEFAULT 0,
    "day_streak" INTEGER NOT NULL DEFAULT 0,
    "last_active_date" DATE,
    "words_collected" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_stats_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "levels" (
    "id" TEXT NOT NULL,
    "order_index" INTEGER NOT NULL,
    "title" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "min_score_to_unlock_next" INTEGER NOT NULL,

    CONSTRAINT "levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "level_materials" (
    "id" TEXT NOT NULL,
    "level_id" TEXT NOT NULL,
    "content_text" JSONB NOT NULL,
    "media_url" TEXT,
    "order_index" INTEGER NOT NULL,

    CONSTRAINT "level_materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "level_questions" (
    "id" TEXT NOT NULL,
    "level_id" TEXT NOT NULL,
    "type" "QuestionType" NOT NULL,
    "question_text" JSONB NOT NULL,
    "options" JSONB,
    "correct_answer" TEXT NOT NULL,
    "media_url" TEXT,
    "time_limit_seconds" INTEGER,

    CONSTRAINT "level_questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_attempts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submitted_at" TIMESTAMP(3),
    "status" "AttemptStatus" NOT NULL DEFAULT 'pending',

    CONSTRAINT "question_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_progress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "level_id" TEXT NOT NULL,
    "status" "ProgressStatus" NOT NULL DEFAULT 'locked',
    "best_score" INTEGER NOT NULL DEFAULT 0,
    "completed_at" TIMESTAMP(3),

    CONSTRAINT "user_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quests" (
    "id" TEXT NOT NULL,
    "title" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "target_type" "QuestTargetType" NOT NULL,
    "target_value" INTEGER NOT NULL,
    "reward_currency" INTEGER NOT NULL,

    CONSTRAINT "quests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_quests" (
    "user_id" TEXT NOT NULL,
    "quest_id" TEXT NOT NULL,
    "current_progress" INTEGER NOT NULL DEFAULT 0,
    "status" "QuestStatus" NOT NULL DEFAULT 'in_progress',

    CONSTRAINT "user_quests_pkey" PRIMARY KEY ("user_id","quest_id")
);

-- CreateTable
CREATE TABLE "shop_items" (
    "id" TEXT NOT NULL,
    "name" JSONB NOT NULL,
    "image_url" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "shop_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_inventory" (
    "user_id" TEXT NOT NULL,
    "shop_item_id" TEXT NOT NULL,
    "purchased_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_inventory_pkey" PRIMARY KEY ("user_id","shop_item_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_google_id_key" ON "users"("google_id");

-- CreateIndex
CREATE INDEX "user_stats_total_xp_idx" ON "user_stats"("total_xp");

-- CreateIndex
CREATE INDEX "question_attempts_user_id_question_id_idx" ON "question_attempts"("user_id", "question_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_progress_user_id_level_id_key" ON "user_progress"("user_id", "level_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_active_avatar_id_fkey" FOREIGN KEY ("active_avatar_id") REFERENCES "shop_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_stats" ADD CONSTRAINT "user_stats_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "level_materials" ADD CONSTRAINT "level_materials_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "level_questions" ADD CONSTRAINT "level_questions_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_attempts" ADD CONSTRAINT "question_attempts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_attempts" ADD CONSTRAINT "question_attempts_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "level_questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_quests" ADD CONSTRAINT "user_quests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_quests" ADD CONSTRAINT "user_quests_quest_id_fkey" FOREIGN KEY ("quest_id") REFERENCES "quests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_inventory" ADD CONSTRAINT "user_inventory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_inventory" ADD CONSTRAINT "user_inventory_shop_item_id_fkey" FOREIGN KEY ("shop_item_id") REFERENCES "shop_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
