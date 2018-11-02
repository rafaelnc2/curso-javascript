const schedule = require("node-schedule");

//Expressão CRON
const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 3', function(){
    //Executar a cada 5 segundos a partir das 17hs de quarta-feira
    console.log("Executando tarefa 1!", new Date().getSeconds());
});

setTimeout(function(){
    tarefa1.cancel();
    console.log("Cancelando tarefa 1");
}, 20000);

//Existem outras formas de excutar funções a cada determinado tempo
//setInterval
//setImediate

//Cria um agendamento recorrente e informa quando ela será executada
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1,5)]; //de segunda a sexta
regra.hour = 17; //às 17hs
regra.second = 30; //executa no segundo 30

const regra2 = schedule.scheduleJob(regra, function(){
    console.log("executando tarefa 2", new Date().getSeconds());
});