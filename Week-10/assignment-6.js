function allPathsSourceToTarget(graph=[[]]){
    var answer = new Array();
    let path = []
    dfs(graph,answer,path,0);  
    return answer 
}
function dfs(graph=[[]],answer=[[]],path=[],curr) {
    path.push(curr);
    if(curr == graph.length-1){
        answer.push([...path])
    }
    else{
        for(let x of graph[curr]){
            dfs(graph,answer,path,x);
        }
    }
    path.pop()
}
const test1 =  [[1,2],[3],[3],[]];
const test2 = [[4,3,1],[3,2,4],[3],[4],[]]
console.log(allPathsSourceToTarget(test2));
