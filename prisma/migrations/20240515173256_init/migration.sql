-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT,
    "email" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "dataDeNascimento" TIMESTAMP(3) NOT NULL,
    "rendaMensal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "susep" TEXT NOT NULL,
    "expiracaoDeVenda" TIMESTAMP(3) NOT NULL,
    "valorMinimoAporteInicial" INTEGER NOT NULL,
    "valorMinimoAporteExtra" INTEGER NOT NULL,
    "idadeDeEntrada" INTEGER NOT NULL,
    "idadeDeSaida" INTEGER NOT NULL,
    "carenciaInicialDeResgate" INTEGER NOT NULL,
    "carenciaEntreResgates" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "extraId" INTEGER,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plano" (
    "id" SERIAL NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "idProduto" INTEGER NOT NULL,
    "aporte" INTEGER NOT NULL,
    "dataDaContratacao" TIMESTAMP(3) NOT NULL,
    "idadeDeAposentadoria" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Extra" (
    "id" SERIAL NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "idPlano" INTEGER NOT NULL,
    "Valoraporte" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resgate" (
    "id" SERIAL NOT NULL,
    "idPlano" INTEGER NOT NULL,
    "valorResgate" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resgate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Plano_idCliente_key" ON "Plano"("idCliente");

-- CreateIndex
CREATE UNIQUE INDEX "Plano_idProduto_key" ON "Plano"("idProduto");

-- CreateIndex
CREATE UNIQUE INDEX "Extra_idCliente_key" ON "Extra"("idCliente");

-- CreateIndex
CREATE UNIQUE INDEX "Extra_idPlano_key" ON "Extra"("idPlano");

-- CreateIndex
CREATE UNIQUE INDEX "Resgate_idPlano_key" ON "Resgate"("idPlano");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_extraId_fkey" FOREIGN KEY ("extraId") REFERENCES "Extra"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plano" ADD CONSTRAINT "Plano_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plano" ADD CONSTRAINT "Plano_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_idPlano_fkey" FOREIGN KEY ("idPlano") REFERENCES "Plano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resgate" ADD CONSTRAINT "Resgate_idPlano_fkey" FOREIGN KEY ("idPlano") REFERENCES "Plano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
