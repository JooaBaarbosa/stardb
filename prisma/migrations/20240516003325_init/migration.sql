/*
  Warnings:

  - You are about to drop the column `instructions` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `genero` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "instructions",
ADD COLUMN     "genero" TEXT NOT NULL;
