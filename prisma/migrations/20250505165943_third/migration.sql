/*
  Warnings:

  - Added the required column `active` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "active" BOOLEAN NOT NULL;
