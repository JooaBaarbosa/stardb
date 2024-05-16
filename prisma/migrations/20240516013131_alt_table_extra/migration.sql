/*
  Warnings:

  - You are about to drop the `Extra` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Extra" DROP CONSTRAINT "Extra_idCliente_fkey";

-- DropForeignKey
ALTER TABLE "Extra" DROP CONSTRAINT "Extra_idPlano_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_extraId_fkey";

-- DropTable
DROP TABLE "Extra";
