var express = require("express"),
    http = require("http"),
    app = express (),
    // Cria a lista de tarefas aqui copiando o conteúdo de todos.OLD.json
    toDos = [
        { 
            "description" : "Get groceries",
            "tags"  : [ "shopping", "chores" ]
        },
        { 
            "description" : "Make up some new ToDos",
            "tags"  : [ "writing", "work" ]
        },
        {
            "description" : "Prep for Monday's class",
            "tags"  : [ "work", "teaching" ]
        },
        { 
            "description" : "Answer emails",
            "tags"  : [ "work" ]
        },
        { 
            "description" : "Take Gracie to the park",
            "tags"  : [ "chores", "pets" ]
        },
        { 
            "description" : "Finish writing this book",
            "tags"  : [ "writing", "work" ]
        }
    ]
    
    app.use(express.static(__dirname + "/client"));

    http.createServer(app).listen(3000);

    // Diz ao Express para efetuar o parse dos objetos JSON de Entrada
    app.use(express.urlencoded());


    // Esta rota tomará o lugar de nosso arquivo todos.json do exemplo do cap 5 
    app.get("/todos.json", function(req, res){
        res.json(toDos);
    });

    app.post("/todos", function(req, res){
        // o Objeto agora está armazenado em req.body
        var newToDo = req.body;

        console.log(newToDo);
        toDos.push(newToDo);

        // envia de volta um objeto simples
        res.json({"Message":"You posted to the server!"});
    });