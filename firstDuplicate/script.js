window.firstDuplicate = function(externalInput) {
    const input = [2, 1, 3, 5, 3, 2];

    function find(a) {
        const arr = [];
        let answer;
        answer = a.filter(item => {
            if (arr.includes(item)) {
                return true;
            }
            arr.push(item); 
            return false;
        })
        
        return answer.length ? answer[0] : -1;
    }

    return find(externalInput || input);

};

window.firstDuplicate2 = function(externalInput) {
    const input = [2, 1, 3, 5, 3, 2];

    function find(a) {
        let answer = [];

        for (var i=0; i < a.length; i++) {
            let item = a[i];
            if (arr.includes(item)) {
                answer.push(item);
            }
            arr.push(item);
        }

        return answer.length ? answer[0] : -1;
    }

    return find(externalInput || input);

};

window.firstDuplicate3 = function(externalInput) {
    const input = [2, 1, 3, 5, 3, 2];

    function find(a) {
        const arr = [];
        let answer;
        answer = a.filter((item, index, arr) => {
            if (arr.slice(index+1).includes(item)) {
                return { item: index}
            }
        })

        const obj = answer.length ? answer.reduce((prev, curr) => {
            return prev[Object.keys(prev)[0]]< curr[Object.keys(curr)[0]] ? prev : curr;
        }) : -1;

        return obj[Object.keys(obj)[0]];
    }

    return find(externalInput || input);

};

window.firstDuplicate4 = function(externalInput) {
    const input = [2, 1, 3, 5, 3, 2];

    function find(a) {
    
        let answer = a.map((item, index, array) => {
            const arr = Array.from(array);
            arr.splice(index, 1);
            const matchIndex = arr.indexOf(item);

            if (matchIndex > -1 && index <= matchIndex) {
                return {
                            "item": item,
                            "index": matchIndex                   
                       };
            }
            return undefined;
        })
        
        let filtered = answer.filter(item => item);
        let duplicates = filtered.reduce((total, curr) => {
            return total.index < curr.index ? total : curr;
        }, 10000)
        
        return duplicates !== 10000 ? duplicates.item : -1;
    }
    

    return find(externalInput || input);

};