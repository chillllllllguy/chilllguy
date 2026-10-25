---
title: Tree practce
description: "這次寫很順"
published: 2026-4-19
tags: [cpp, tree]
category: algorithm
image: "./83e5770bc682026f23c4fe8408423cc3.jpg"
---

### 主要名詞

root 根:開始發散的點
parent 父節點
child 子節點
leaf 葉子
sibling 兄弟:同個parent
subtree 子樹
depth 深:root到該點深度
level 層
height 高

## practice

[b967. 4. 血緣關係](https://zerojudge.tw/ShowProblem?problemid=b967)
找出最遠的血緣距離
hint:先隨便找一點做兩次dfs

```cpp
#include <bits/stdc++.h>
using namespace std;
int n, a, b;
vector<int> adj[100001];
int dis, e;

void dfs(int u, int p, int depth){
         //該點, parent, 深
    for(int v:adj[u]){
        if(v == p) continue;
        dfs(v, u, depth+1);
    }
    if(depth>dis){
        dis = depth;
        e = u;
    }
}
int main(){
    cin >> n;
    for(int i=0;i<n-1;++i){
        cin >> a >> b;
        a--;
        b--;
        adj[a].push_back(b);
        adj[b].push_back(a);
    }

    dfs(0, -1, 0);
    dis = 0;
    dfs(e, -1, 0);
    cout << dis << endl;
}
```

[c463. apcs 樹狀圖分析 (Tree Analyses)](https://zerojudge.tw/ShowProblem?problemid=c463)
求每點的高度(從最底下往上之最大高度)
hint:從root開始 做遞迴

```cpp
#include <bits/stdc++.h>
typedef long long LL;
using namespace std;
LL n, a, num, root;
vector<LL> parent(100001, 0), len(100001, 0);
vector<LL> child[100001];
LL sum = 0, Max = 0;
void dfs(LL u){
    LL mx = 0;
    for(int v:child[u]){
        dfs(v);
        mx = max(mx, len[v]+1);
    }
    len[u] = mx;
}
int main(){
    cin >> n;
    for(int i=1;i<=n;++i){
        cin >> num;
        for(int j=0;j<num;++j){
            cin >> a;
            child[i].push_back(a);
            parent[a] = i;
        }
    }
    for(int i=1;i<=n;++i){
        if(parent[i]==0) root = i;
    }
    dfs(root);
    for(int i=1;i<=n;++i) sum+=len[i];
    cout << root << '\n' << sum;
}
```

笨方法:跑每一個leaf直到走到root 經過的點再求最大高
因為中間點會重複跑到所以複雜度大很多

```cpp
#include <bits/stdc++.h>
typedef long long LL;
using namespace std;
LL n, a, num, root;
vector<LL> parent(100001, 0), len(100001, 0);
set<int> s;
LL sum = 0, Max = 0;
void dfs(LL u, LL depth){
    len[u] = max(len[u], depth);
    if(parent[u]!=0) dfs(parent[u], depth+1);
}
int main(){
    cin >> n;
    for(int i=1;i<=n;++i){
        cin >> num;
        for(int j=0;j<num;++j){
            cin >> a;
            s.insert(i);
            parent[a] = i;
        }
    }
    for(int i=1;i<=n;++i){
        if(parent[i]==0) root = i;
        if(s.find(i)==s.end()) dfs(i, 0);
    }
    for(int i=1;i<=n;++i) sum += len[i];
    cout << root << '\n' << sum;
}
```

[h029. 202001_4 貨物分配
](https://zerojudge.tw/ShowProblem?problemid=h029)
題目看懂就通 會用到類似上一題的遞迴概念

```cpp
#include <bits/stdc++.h>
using namespace std;
int n, m, a, b, c;
vector<int> value(2*100001, 0), w(10005);
vector<int> L(2*100001), R(2*100001);
void pull(int u){
    if(u>=n){
        return ;
    }
    pull(L[u]);
    pull(R[u]);
    value[u] = value[L[u]] + value[R[u]];
}
int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cin >> n >> m;
    for(int i=n;i<2*n;++i) cin >> value[i];
    for(int i=0;i<m;++i) cin >> w[i];
    for(int i=0;i<n-1;++i){
        cin >> a >> b >> c;
        L[a] = b;
        R[a] = c;
    }
    pull(1);
    for(int i=0;i<m;++i){
        int it = 1;
        while(it<n){
            int left = L[it];
            int right = R[it];
            if(value[left]<=value[right]) it = left;
            else it = right;
            value[it] += w[i];
        }
        cout << it << " ";
    }
}
```
