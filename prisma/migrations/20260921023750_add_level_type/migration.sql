-- CreateEnum
CREATE TYPE "LevelType" AS ENUM ('learning', 'test');

-- AlterTable
ALTER TABLE "levels" ADD COLUMN     "type" "LevelType" NOT NULL DEFAULT 'learning';
