
function domMake(struct){
    console.log(1, (struct))
    const el = document.createElement(
        struct[0], struct[1]
    )
    for (prop in struct[1]){
        el.setAttribute(prop, struct[1][prop]);
    }
    if (struct[2] === undefined){

    }else if (typeof(struct[2])==='string'){
        el.innerHTML=struct[2]
    }else{
        console.log(2,struct)
        struct[2].forEach((st)=>
        {
            el.appendChild(
                domMake(st)
                )
        })
    }
    return el
}

function getSvgNode(n, v) {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    for (var p in v)
        n.setAttributeNS(null, p, v[p]);
    return n
}

const struct = [
    'div',
    {'class':'foo'},
    [
        ['div', {'class':'bar'},'hello']
        ,['div', {'class':'bar',style:'border: 1px solid blue;'},'hello2']
        ,['div', {'class':'bar','style':'border: 2px solid darkgreen; height:100px; width:20px;'}]
        ,['div', {'class':'bar'},'hello4']
    ]
    ]
function elemput(elem, struct){
    tag, props, childs = struct
}
function init(id, graph){
    /*********
    graph = [line]
    line = (name, [data])
    ********/
    svg_schem = ['svg', {
    class:'svg-root',
    viewBox:"0 0 300 100",
    stroke:'red',
    fill:'gray',
    xmlns:"http://www.w3.org/2000/svg"
    },[]]
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // set width and height
    svg.setAttribute("width", "3000");
    svg.setAttribute("height", "3000");
    for (i=0;i<12000;i++){
        svg.appendChild( getSvgNode('line', 
            {x1:i*2,y1:i*3,x2:i*2+20,y2:i, stroke:'black'})
        )
    }
    el = document.getElementById(id)
    //#ch = domMake(svg)
    console.log(svg)
    el.appendChild( svg )
}

