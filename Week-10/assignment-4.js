class Graph{
 adjencyListconvert(edges,n,source,destination){
    this.list = new Map();
    this.visited = new Set();
    for(let [e,v] of edges){
        if(this.list.has(e)){
            this.list.get(e).push(v)
        }else{
            this.list.set(e,[v]);
        }
        if(this.list.has(v)){
            this.list.get(v).push(e);
        }else{
            this.list.set(v,[e]);
        }
    }
    this.dfs(source)
    return this.visited.has(destination);
 }   
 dfs(vertex){
    this.visited.add(vertex);
    let neigbours = this.list.get(vertex)
    if(neigbours && neigbours.length){
        for(let i=0;i<neigbours.length;i++){
            if(!this.visited.has(neigbours[i])){
                this.dfs(neigbours[i]);
            }
        }
    }
 }
}
const testData1 = [[0,1],[1,2],[2,0]]
const testData2 = [[0,1],[0,2],[3,5],[5,4],[4,3]]
const graph = new Graph()
console.log(graph.adjencyListconvert(testData1,testData1.length,0,2)); //true

console.log(graph.adjencyListconvert(testData2,testData2.length,0,5)); // false