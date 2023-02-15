/*
  Warnings:

  - A unique constraint covering the columns `[sid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('male', 'female', 'other');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "gender" "GENDER" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_sid_key" ON "User"("sid");
