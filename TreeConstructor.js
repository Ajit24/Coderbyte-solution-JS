function node(val) {
    const obj = {}
    obj.val = val;
    obj.hasParent = false;
    obj.left = null;
    obj.right = null;
    return obj;
  }
  
  function TreeConstructor(strArr) {
    // parse strArr;
    strArr = strArr.map(item => {
      item = item.replace(/[() ]+/g, '');
      return item.split(',');
    });
    
    const tree = {};
    
    for (let i = 0; i < strArr.length; i++) {
      // instantiate nodes
      if (tree[strArr[i][0]] === undefined) { tree[strArr[i][0]] = node(strArr[i][0]); }
      if (tree[strArr[i][1]] === undefined) { tree[strArr[i][1]] = node(strArr[i][1]); }
  
      // quick check to make sure nodes can't have multiple parents
      if (tree[strArr[i][0]].hasParent === true) { return false; }
  
      // check to see if parent has 2 children already, fill in empty spaces if not
      if (tree[strArr[i][1]].left === null) {
        tree[strArr[i][1]].left = tree[strArr[i][0]];
      } else if (tree[strArr[i][1]].right === null) {
        tree[strArr[i][1]].right = tree[strArr[i][0]];
      } else {
        return false;
      }
      tree[strArr[i][0]].hasParent = true;
    }
    return true;
  }
     
  // keep this function call here 
  TreeConstructor(readline());