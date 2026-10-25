---
title: AP325 Q-6-8. Local alignment
description: dp好難 我不會畫圖
published: 2026-02-18
tags: [AP325, cpp, LCS, dp]
category: algorithm
image: "./98hH3mf.jpg"
---

title: Tree practce
discription: "這次寫很順"
published: 2026-4-19
tags: [cpp, tree]
category: algorithm

---

---

[題目link](https://judge.tcirc.tw/problem/d074)

### 敘述

Alignment 是生物序列（如 DNA 與蛋白質）分析的重要問題。輸入兩個字元序列，我們要將兩序列的字母依照原順序做一個對應，過程中可以將任一序列的某些位置加入空白。

以輸入 $CTTAACT$ 與 $CGGATCAT$ 為例，以下是一個可能的 alignment（以 - 表示空白）：

```
CTTAAC-T
CGGATCAT
```

以下也是一個可能的 alignment：

```
C---TTAACT
CGGATCA--T
```

alignment 的目的是要評估兩序列有多相似，我們會有一個評分機制。以下是一個例子：

兩字母相同得 8 分
相異得 -5 分
字母與空白對應得 -3 分
給定評分機制並輸入兩序列，我們要計算 最大的 alignment 分數。

Alignment 可分為 global alignment（輸入的序列整個要納入 alignment）與 local alignment（兩序列各選取連續的一段，長度可為
，來做 alignment）。

輸入兩字串，計算 local alignment 的最大分數。

### input

第一行與第二行個有一個字串，字串均只由 $ATCG$ 四個字母組成，長度不超過500。

### example

cin

```
ATATCTTAACTGG
CGCGGATCATAA
```

cout

```
43
```

### 想法

![image](https://hackmd.io/_uploads/rk11THf_-x.png)
定義兩字串變數為 $s1, s2，length$ 分別為 $n1, n2$
跑入雙層迴圈內判斷字母是否相同
相同則前面 $[i-1][j-1]$ +8
不同則有三種走法( $s1/s2$ blank or pass )這部分如果<0就重新計算
從題目也可以清楚觀察到alignment最大分數，前後必須為相同字母(+8)所以只有相等的地方需要更新答案
再來為了節省空間，我把n1的地方改成用to, from(0, 1)更新

### code

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    string s1, s2;
    cin >> s1 >> s2;
    int n1 = s1.size(), n2 = s2.size();
    int lcs[2][505] = {}, to = 1, from = 0;
    int sum = 0;
    for(int i=1;i<=n1;++i){
        for(int j=1;j<=n2;++j){
            if(s1[i-1]==s2[j-1]){
                lcs[to][j] = lcs[from][j-1]+8;
                sum = max(sum, lcs[to][j]);
            }
            else{
                int bl1 = max(0, lcs[to][j-1]-3);//blank
                int bl2 = max(0, lcs[from][j]-3);//blank
                int sk = max(0, lcs[from][j-1]-5);
                lcs[to][j] = max(max(bl1, bl2), sk);
            }
        }
        swap(from, to);
    }
    cout << sum << endl;
}
```
