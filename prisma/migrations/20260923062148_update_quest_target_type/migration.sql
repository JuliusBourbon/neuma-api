/*
  Warnings:

  - The values [levels_completed,perfect_scores] on the enum `QuestTargetType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "QuestTargetType_new" AS ENUM ('learning_completed', 'test_completed', 'perfect_learning', 'perfect_test', 'streak_days', 'words_collected', 'avatars_collected');
ALTER TABLE "quests" ALTER COLUMN "target_type" TYPE "QuestTargetType_new" USING ("target_type"::text::"QuestTargetType_new");
ALTER TYPE "QuestTargetType" RENAME TO "QuestTargetType_old";
ALTER TYPE "QuestTargetType_new" RENAME TO "QuestTargetType";
DROP TYPE "public"."QuestTargetType_old";
COMMIT;
