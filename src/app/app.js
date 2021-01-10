import React, { useState } from 'react';
import Graph from 'react-graph-vis';
import cloneDeep from 'lodash/cloneDeep';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import './app.css';

const graph = {
    nodes: [
        { id: 1, label: "Вершина 1", group: 'group1', hidden: false},
        { id: 2, label: "Вершина 2", group: 'group3', hidden: false},
        { id: 3, label: "Вершина 3", group: 'group2', hidden: false},
        { id: 4, label: "Вершина 4", group: 'group2', hidden: false},
        { id: 5, label: "Вершина 5", group: 'group4', hidden: false},
        { id: 6, label: "Вершина 6", group: 'group2', hidden: false},
        { id: 7, label: "Вершина 7", group: 'group3', hidden: false},
        { id: 8, label: "Вершина 8", group: 'group4', hidden: false},
        { id: 9, label: "Вершина 9", group: 'group1', hidden: false},
        { id: 10, label: "Вершина 10", group: 'group3', hidden: false},
        { id: 11, label: "Вершина 11", group: 'group2', hidden: false},
        { id: 12, label: "Вершина 12", group: 'group4', hidden: false},
        { id: 13, label: "Вершина 13", group: 'group1', hidden: false},
        { id: 14, label: "Вершина 14", group: 'group1', hidden: false},
        { id: 15, label: "Вершина 15", group: 'group3', hidden: false},
        { id: 16, label: "Вершина 16", group: 'group4', hidden: false},
        { id: 17, label: "Вершина 17", group: 'group3', hidden: false},
        { id: 18, label: "Вершина 18", group: 'group1', hidden: false},
        { id: 19, label: "Вершина 19", group: 'group2', hidden: false},
        { id: 20, label: "Вершина 20", group: 'group1', hidden: false},
        { id: 21, label: "Вершина 21", group: 'group4', hidden: false},
        { id: 22, label: "Вершина 22", group: 'group3', hidden: false},
        { id: 23, label: "Вершина 23", group: 'group2', hidden: false},
        { id: 24, label: "Вершина 24", group: 'group1', hidden: false},
        { id: 25, label: "Вершина 25", group: 'group3', hidden: false}
    ],
    edges: [
        { id: 1, from: 1, to: 2, label: "Использует"},
        { id: 2, from: 1, to: 3, label: "Содержит"},
        { id: 3, from: 1, to: 4, label: "Формирует"}, 
        { id: 4, from: 2, to: 4, label: "Доставляет"},
        { id: 5, from: 2, to: 5, label: "Проверяет"},
        { id: 6, from: 3, to: 4, label: "Формирует"},
        { id: 7, from: 6, to: 1, label: "Доставляет"},
        { id: 8, from: 7, to: 6, label: "Проверяет"},
        { id: 9, from: 8, to: 7, label: "Использует"},
        { id: 10, from: 9, to: 5, label: "Содержит"},
        { id: 11, from: 10, to: 9, label: "Проверяет"},
        { id: 12, from: 8, to: 11, label: "Доставляет"},
        { id: 13, from: 10, to: 12, label: "Использует"},
        { id: 14, from: 6, to: 15, label: "Содержит"},
        { id: 15, from: 13, to: 15, label: "Доставляет"},
        { id: 16, from: 5, to: 16, label: "Формирует"},
        { id: 17, from: 14, to: 16, label: "Проверяет"},
        { id: 18, from: 14, to: 17, label: "Использует"},
        { id: 19, from: 12, to: 18, label: "Доставляет"},
        { id: 20, from: 19, to: 11, label: "Формирует"},
        { id: 21, from: 13, to: 20, label: "Использует"},
        { id: 22, from: 20, to: 21, label: "Доставляет"},
        { id: 23, from: 17, to: 22, label: "Содержит"},
        { id: 24, from: 23, to: 18, label: "Доставляет"},
        { id: 25, from: 19, to: 24, label: "Использует"},
        { id: 26, from: 20, to: 25, label: "Проверяет"}
    ]
}

const options = {
    layout: {
        hierarchical: false,
        randomSeed: 123
    },
    nodes: {
        shape: 'dot',
        font: {
            size: 16
        }
    },
    edges: {
        color: "#000000",
        font: {
            size: 12,
            mono: {
                vadjust: 0
            }
        }
    },
    interaction: {
        dragView: true,
        zoomView: true
    },
    physics: {
        enabled: false
    },
    groups: {
        group1: {color: "#e04141", size: 14},
        group2: {color: "#7be041", size: 18},
        group3: {color: "#e09c41", size: 14},
        group4: {color: "#41e0c9", size: 14},
        addedgroup1: {color: "#e571c2", size: 14},
        addedgroup2: {color: "#1c21e0", size: 18}
    }
}

const events = {
    select: function(event) {
        var { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
    }
}

function App() {
    const [graphData, setGraphData] = useState(graph);
    const [inputNameNode, setInputNameNode] = useState('');
    const [optionSize, setOptionSize] = useState();
    const [optionFirstNode, setOptionFirstNode] = useState();
    const [optionSecondNode, setOptionSecondNode] = useState();
    const [optionTypeEdge, setOptionTypeEdge] = useState();
    const [inputDistance, setInputDistance] = useState('');
    const [optionDistance, setOptionDistance] = useState();

    const handleChangeTypeEdge = e => {
        setOptionTypeEdge(e.value);
    }

    const dataforsize = [
        {value: 1, label: "Обычный"},
        {value: 2, label: "Большой"}
    ]

    //"Удерживает" значение выбранного размера из списка для использования в функции
    const handleChangeSize = e => {
        setOptionSize(e.value);
    }
    
    //Функция создания вершин
    const generateNode = e => {
        let newGraph = cloneDeep(graphData);
        let inputtext = cloneDeep(inputNameNode);
        let optionsizechoice = cloneDeep(optionSize);
        const newNodeId = Math.max(...newGraph.nodes.map(d => d.id)) + 1;
        let newNode = {};
        if (optionsizechoice === 1) {
            newNode = { id: newNodeId, label: `${inputtext}`, group: 'addedgroup1', hidden: false}
        }
        else if (optionsizechoice === 2) {
            newNode = { id: newNodeId, label: `${inputtext}`, group: 'addedgroup2', hidden: false}
        }
        newGraph.nodes.push(newNode);
        setGraphData(newGraph);
    }

    const dataforedge = {
        dfe: [
            {value: 1, label: "Использует"},
            {value: 2, label: "Содержит"},
            {value: 3, label: "Формирует"},
            {value: 4, label: "Доставляет"},
            {value: 5, label: "Проверяет"}
        ]
    }

    //"Удерживает" значения id первой вершины для создания ребра
    const handleChangeFirstNode = e => {
        setOptionFirstNode(e.id);
    }

    //"Удерживает" значения id второй вершины для создания ребра
    const handleChangeSecondNode = e => {
        setOptionSecondNode(e.id);
    }

    //Функция создания ребер
    const connectNodes = e => {
        let newGraph = cloneDeep(graphData);
        let optionfirstchoice = cloneDeep(optionFirstNode);
        let optionsecondchoice = cloneDeep(optionSecondNode);
        let optiontypechoice = cloneDeep(optionTypeEdge);
        let newEdge = {};
        const newEdgeId = Math.max(...newGraph.edges.map(d => d.id)) + 1;
        let countrepeats = 0;
        for (let i = 0; i < newGraph.edges.length; i++) {
            if (((newGraph.edges[i].from === optionfirstchoice) && (newGraph.edges[i].to === optionsecondchoice)) || ((newGraph.edges[i].to === optionfirstchoice) && (newGraph.edges[i].from === optionsecondchoice))) {
                countrepeats += 1;
            }
            else if ((optionfirstchoice === optionsecondchoice) && (newGraph.edges[i].from === newGraph.edges[i].to)) {
                countrepeats +=1;
            }
        }
        if (countrepeats === 0) {
            if ((optionfirstchoice !== optionsecondchoice) && (optionfirstchoice >= 1) && (optionsecondchoice >= 1) && (optiontypechoice  ===1)) {
                newEdge = { id: newEdgeId, from: optionfirstchoice, to: optionsecondchoice, label: "Использует"}
            }
            else if ((optionfirstchoice !== optionsecondchoice) && (optionfirstchoice >= 1) && (optionsecondchoice >= 1) && (optiontypechoice===2)) {
                newEdge = { id: newEdgeId, from: optionfirstchoice, to: optionsecondchoice, label: "Содержит"}
            }
            else if ((optionfirstchoice !== optionsecondchoice) && (optionfirstchoice >= 1) && (optionsecondchoice >= 1) && (optiontypechoice===3)) {
                newEdge = { id: newEdgeId, from: optionfirstchoice, to: optionsecondchoice, label: "Формирует"}
            }
            else if ((optionfirstchoice !== optionsecondchoice) && (optionfirstchoice >= 1) && (optionsecondchoice >= 1) && (optiontypechoice===4)) {
                newEdge = { id: newEdgeId, from: optionfirstchoice, to: optionsecondchoice, label: "Доставляет"}
            }
            else if ((optionfirstchoice !== optionsecondchoice) && (optionfirstchoice >= 1) && (optionsecondchoice >= 1) && (optiontypechoice===5)) {
                newEdge = { id: newEdgeId, from: optionfirstchoice, to: optionsecondchoice, label: "Проверяет"}
            }
            else if ((optionfirstchoice >= 1) && (optionsecondchoice >= 1) && (optiontypechoice >=1)) {
                newEdge = { id: newEdgeId, from: optionfirstchoice, to: optionsecondchoice}
            }
        }
        newGraph.edges.push(newEdge);
        setGraphData(newGraph);
    }

    //"Удерживает" значение id вершины, на которой используют фильтр по дистанции
    const handleChangeFilterDistance = e => {
        setOptionDistance(e.id);
    }

    //Функция фильтра по дистанции, теоретически будет работать для любой дистанции >=1
    const filterDistance = e => {
        let newGraph = cloneDeep(graphData);
        let inputdist = Number(cloneDeep(inputDistance));
        let optiondist = cloneDeep(optionDistance);
        let savednode = [];
        savednode.push(optiondist);
        let allnodes = [];
        let alledges = [];
        let notmatching = [];
        let not2matching = [];
        let saved2node = [];
        for (let p = 0; p < newGraph.nodes.length; p++) {
            allnodes.push(newGraph.nodes[p].id);
        }
        for (let r = 0; r < newGraph.edges.length; r++) {
            alledges.push(newGraph.edges[r].id);
        }
        for (let i = 0; i < newGraph.nodes.length; i++) {
            for (let p = 1; p <= inputdist; p++) {
                if ((p === 1) && (optiondist === i)) {
                    for (let j = 0; j < newGraph.edges.length; j++) {
                        if ((newGraph.edges[j].from === optiondist) && (newGraph.edges[j].to !== optiondist))  {
                            savednode.push(newGraph.edges[j].to);
                        }
                        else if ((newGraph.edges[j].from !== optiondist) && (newGraph.edges[j].to === optiondist)) {
                            savednode.push(newGraph.edges[j].from);
                        }
                    }
                    for (let g = 0; g < allnodes.length; g++) {
                        if (savednode.indexOf(allnodes[g])===-1) {
                            notmatching.push(allnodes[g]);
                        }
                    }
                }
                else if ((p % 2 === 0) && (p >= 2) && (optiondist===i)) {
                    for (let y = 0; y < newGraph.edges.length; y++) {
                        for (let n = 0; n < savednode.length; n++) {
                            for (let b = 0; b < notmatching.length; b++) {
                                if (((newGraph.edges[y].from === savednode[n]) && (newGraph.edges[y].to === notmatching[b])) || ((newGraph.edges[y].to === savednode[n]) && (newGraph.edges[y].from === notmatching[b]))) {
                                    saved2node.push(notmatching[b]);
                                }
                            }
                        }
                    }
                    for (let f = 0; f < notmatching.length; f++) {
                        if (saved2node.indexOf(notmatching[f])===-1) {
                            not2matching.push(notmatching[f]);
                        }
                    }
                    savednode.splice(0, savednode.length);
                    notmatching.splice(0, notmatching.length);
                }
                else if ((p % 2 === 1) && (p >= 3) && (optiondist===i)) {
                    for (let y = 0; y < newGraph.edges.length; y++) {
                        for (let n = 0; n < saved2node.length; n++) {
                            for (let b = 0; b < not2matching.length; b++) {
                                if (((newGraph.edges[y].from === saved2node[n]) && (newGraph.edges[y].to === not2matching[b])) || ((newGraph.edges[y].to === saved2node[n]) && (newGraph.edges[y].from === not2matching[b]))) {
                                    savednode.push(not2matching[b]);
                                }
                            }
                        }
                    }
                    for (let f = 0; f < not2matching.length; f++) {
                        if (savednode.indexOf(not2matching[f])===-1) {
                            notmatching.push(not2matching[f]);
                        }
                    }
                    saved2node.splice(0, saved2node.length);
                    not2matching.splice(0, not2matching.length);
                }
            }
        }
        if (inputdist % 2 === 1) {
            for (let u = 0; u < notmatching.length; u++) {
                for (let h = 0; h < newGraph.nodes.length; h++) {
                    if (newGraph.nodes[h].id === notmatching[u]) {
                        newGraph.nodes[h].hidden = true;
                    }
                }
            }
        }
        else if (inputdist % 2 === 0) {
            for (let u = 0; u < not2matching.length; u++) {
                for (let h = 0; h < newGraph.nodes.length; h++) {
                    if (newGraph.nodes[h].id === not2matching[u]) {
                        newGraph.nodes[h].hidden = true;
                    }
                }
            }
        }
        setGraphData(newGraph);
    }

    return (
        <div className="app">
            <Graph key={uuidv4} graph={graphData} options={options} events={events} style={ { width: "90%", height: "650px" } } />
            <div className="app-blocks">
                <h4 className="textoutside">Добавить вершину</h4>
                <div className="menu">
                    <h4 className="textinside">Название:</h4>
                    <input className="input" value={inputNameNode} onInput={e => setInputNameNode(e.target.value)}/>
                    <h4 className="textinside">Размер:</h4>
                    <Select
                        className="select"
                        options={dataforsize}
                        getOptionLabel={ (option)=>option.label}
                        value={dataforsize.find(obj => obj.value === optionSize)}
                        onChange={handleChangeSize}/>
                    <button className="buttonlast" onClick={generateNode}>Добавить вершину</button>
                </div>
                <h4 className="textoutside">Ребра</h4>
                <div className="menu">
                    <h4 className="textinside">Начальная вершина:</h4>
                    <Select
                        className="select"
                        options={graphData.nodes}
                        value={graphData.nodes.find(obj => obj.id === optionFirstNode)}
                        onChange={handleChangeFirstNode}/>
                    <h4 className="textinside">Конечная вершина:</h4>
                    <Select
                        className="select"
                        options={graphData.nodes}
                        value={graphData.nodes.find(obj => obj.id === optionSecondNode)}
                        onChange={handleChangeSecondNode}/>
                    <h4 className="textinside">Тип ребра:</h4>
                    <Select
                        className="select"
                        options={dataforedge.dfe}
                        value={dataforedge.dfe.find(obj => obj.value === optionTypeEdge)}
                        onChange={handleChangeTypeEdge}/>
                    <button className="buttonlast" onClick={connectNodes}>Связать вершины</button>
                </div>
                <h4 className="textoutside">Фильтр по дистанции от вершины</h4>
                <div className="menu">
                    <h4 className="textinside">Начальная вершина:</h4>
                    <Select
                        className="select"
                        options={graphData.nodes}
                        value={graphData.nodes.find(obj => obj.id === optionDistance)}
                        onChange={handleChangeFilterDistance}/>
                    <h4 className="textinside">Дистанция:</h4>
                    <input className="input" value={inputDistance} onInput={e => setInputDistance(e.target.value)}/>
                    <button className="buttonlast" onClick={filterDistance}>Показать визуализацию</button>
                </div>
            </div>
        </div>
    )
}

export default App;