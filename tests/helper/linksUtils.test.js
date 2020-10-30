/* eslint-disable no-undef */
const { expect } = require('chai');
const linksUtils = require('../../helper/linksUtils');

describe('Links Utils', () => {
  it('should return Guia de Sobrevivência link', () => {
    expect(linksUtils.messageBuilder('guia'))
      .equal('Olá, seguem os links:\nGuia de Sobrevivência - undefined');
  });
  it('should return Valores link', () => {
    expect(linksUtils.messageBuilder('valores'))
      .equal('Olá, seguem os links:\nValores - undefined');
  });
  it('should return Departamento Pessoal link', () => {
    expect(linksUtils.messageBuilder('departamento pessoal'))
      .equal('Olá, seguem os links:\nDepartamento Pessoal - undefined');
    expect(linksUtils.messageBuilder('pessoal'))
      .equal('Olá, seguem os links:\nDepartamento Pessoal - undefined');
    expect(linksUtils.messageBuilder('pessoas'))
      .equal('Olá, seguem os links:\nDepartamento Pessoal - undefined');
    expect(linksUtils.messageBuilder('dp'))
      .equal('Olá, seguem os links:\nDepartamento Pessoal - undefined');
  });
  it('should return Salário & Benefícios link', () => {
    expect(linksUtils.messageBuilder('benefício'))
      .equal('Olá, seguem os links:\nSalário & Benefícios - undefined');
    expect(linksUtils.messageBuilder('beneficio'))
      .equal('Olá, seguem os links:\nSalário & Benefícios - undefined');
    expect(linksUtils.messageBuilder('benefícios'))
      .equal('Olá, seguem os links:\nSalário & Benefícios - undefined');
    expect(linksUtils.messageBuilder('beneficios'))
      .equal('Olá, seguem os links:\nSalário & Benefícios - undefined');
    expect(linksUtils.messageBuilder('salario'))
      .equal('Olá, seguem os links:\nSalário & Benefícios - undefined');
    expect(linksUtils.messageBuilder('salarios'))
      .equal('Olá, seguem os links:\nSalário & Benefícios - undefined');
    expect(linksUtils.messageBuilder('salário'))
      .equal('Olá, seguem os links:\nSalário & Benefícios - undefined');
    expect(linksUtils.messageBuilder('salários'))
      .equal('Olá, seguem os links:\nSalário & Benefícios - undefined');
  });
  it('should return Ponto Eletrônico & Horas Extras link', () => {
    expect(linksUtils.messageBuilder('ponto'))
      .equal('Olá, seguem os links:\nPonto Eletrônico & Horas Extras - undefined');
    expect(linksUtils.messageBuilder('ponto eletronico'))
      .equal('Olá, seguem os links:\nPonto Eletrônico & Horas Extras - undefined');
    expect(linksUtils.messageBuilder('ponto eletrônico'))
      .equal('Olá, seguem os links:\nPonto Eletrônico & Horas Extras - undefined');
    expect(linksUtils.messageBuilder('horas'))
      .equal('Olá, seguem os links:\nPonto Eletrônico & Horas Extras - undefined');
    expect(linksUtils.messageBuilder('horas extras'))
      .equal('Olá, seguem os links:\nPonto Eletrônico & Horas Extras - undefined');
  });
  it('should return Eventos & Treinamentos link', () => {
    expect(linksUtils.messageBuilder('evento'))
      .equal('Olá, seguem os links:\nEventos & Treinamentos - undefined');
    expect(linksUtils.messageBuilder('eventos'))
      .equal('Olá, seguem os links:\nEventos & Treinamentos - undefined');
    expect(linksUtils.messageBuilder('treinamento'))
      .equal('Olá, seguem os links:\nEventos & Treinamentos - undefined');
    expect(linksUtils.messageBuilder('treinamentos'))
      .equal('Olá, seguem os links:\nEventos & Treinamentos - undefined');
  });
  it('should return Materiais Padrão link', () => {
    expect(linksUtils.messageBuilder('padrão'))
      .equal('Olá, seguem os links:\nMateriais Padrão - undefined');
    expect(linksUtils.messageBuilder('padrao'))
      .equal('Olá, seguem os links:\nMateriais Padrão - undefined');
    expect(linksUtils.messageBuilder('material'))
      .equal('Olá, seguem os links:\nMateriais Padrão - undefined');
    expect(linksUtils.messageBuilder('materiais'))
      .equal('Olá, seguem os links:\nMateriais Padrão - undefined');
    expect(linksUtils.messageBuilder('apresentacao'))
      .equal('Olá, seguem os links:\nMateriais Padrão - undefined');
    expect(linksUtils.messageBuilder('apresentação'))
      .equal('Olá, seguem os links:\nMateriais Padrão - undefined');
    expect(linksUtils.messageBuilder('apresentações'))
      .equal('Olá, seguem os links:\nMateriais Padrão - undefined');
  });
  it('should return Malote link', () => {
    expect(linksUtils.messageBuilder('malote'))
      .equal('Olá, seguem os links:\nMalote - undefined');
    expect(linksUtils.messageBuilder('malotes'))
      .equal('Olá, seguem os links:\nMalote - undefined');
  });
  it('should return Reembolsos & Adiantamentos link', () => {
    expect(linksUtils.messageBuilder('reembolso'))
      .equal('Olá, seguem os links:\nReembolsos & Adiantamentos - undefined');
    expect(linksUtils.messageBuilder('Reembolsos'))
      .equal('Olá, seguem os links:\nReembolsos & Adiantamentos - undefined');
    expect(linksUtils.messageBuilder('adiantamento'))
      .equal('Olá, seguem os links:\nReembolsos & Adiantamentos - undefined');
    expect(linksUtils.messageBuilder('adiantamentos'))
      .equal('Olá, seguem os links:\nReembolsos & Adiantamentos - undefined');
  });
  it('should return Viagens link', () => {
    expect(linksUtils.messageBuilder('viagem'))
      .equal('Olá, seguem os links:\nViagens - undefined');
    expect(linksUtils.messageBuilder('viagens'))
      .equal('Olá, seguem os links:\nViagens - undefined');
  });
  it('should return Tutorial Expenses link', () => {
    expect(linksUtils.messageBuilder('expenses'))
      .equal('Olá, seguem os links:\nTutorial Expenses - undefined');
    expect(linksUtils.messageBuilder('expense'))
      .equal('Olá, seguem os links:\nTutorial Expenses - undefined');
    expect(linksUtils.messageBuilder('despesas'))
      .equal('Olá, seguem os links:\nTutorial Expenses - undefined');
    expect(linksUtils.messageBuilder('despesa'))
      .equal('Olá, seguem os links:\nTutorial Expenses - undefined');
  });
  it('should return Tutorial MyTe link', () => {
    expect(linksUtils.messageBuilder('myte'))
      .equal('Olá, seguem os links:\nTutorial MyTe - undefined');
    expect(linksUtils.messageBuilder('timesheet'))
      .equal('Olá, seguem os links:\nTutorial MyTe - undefined');
  });
  it('should return Talks Internas link', () => {
    expect(linksUtils.messageBuilder('talks'))
      .equal('Olá, seguem os links:\nTalks Internas - undefined');
    expect(linksUtils.messageBuilder('gravações'))
      .equal('Olá, seguem os links:\nTalks Internas - undefined');
    expect(linksUtils.messageBuilder('gravacoes'))
      .equal('Olá, seguem os links:\nTalks Internas - undefined');
    expect(linksUtils.messageBuilder('gravacao'))
      .equal('Olá, seguem os links:\nTalks Internas - undefined');
    expect(linksUtils.messageBuilder('gravação'))
      .equal('Olá, seguem os links:\nTalks Internas - undefined');
  });
});
