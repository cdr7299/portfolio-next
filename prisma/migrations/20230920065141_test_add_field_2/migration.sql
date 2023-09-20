/*
  Warnings:

  - Added the required column `test_key` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "test_key" TEXT NOT NULL;
