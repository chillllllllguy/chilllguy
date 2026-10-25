---
title: Sudokul-Leetcode
description: 回溯
published: 2026-04-09
tags: [algorithm, cpp, Leetcode]
category: cpp
image: "./af076a8e77ee7d9374975001964d7e69.jpg"
---

~~把題目移植到這裡~~
[36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/)
檢查直橫九宮格 有solution就會回傳true

```cpp
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        for(int i=0;i<9;++i){
            for(int j=0;j<9;++j){
                if(board[i][j]!='.'){
                    for(int k=0;k<9;++k){
                        if(board[i][k]==board[i][j]&&k!=j) return false;
                        if(board[k][j]==board[i][j]&&k!=i) return false;
                    }
                    //0 1 2 | 3 4 5 | 6 7 8
                    int a, b;
                    a = i/3;
                    b = j/3;
                    for(int k=0;k<3;++k){
                        for(int l=0;l<3;++l){
                            if(3*a+k==i&&3*b+l==j) continue;
                            if(board[3*a+k][3*b+l]==board[i][j]) return false;
                        }
                    }
                }
            }
        }
        return true;
    }
};
```

[37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/description/)
非數字則try 0~9可否填入其中
呼叫第二個函式(isValid)判斷能否放入該數字
可以的話跑第二層dfs
(以免沒判斷到前面填入的數字去和其他格重複到)

```cpp
class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        dfs(board);
    }
    bool dfs(vector<vector<char>>& board){
        for(int i=0;i<9;++i){
            for(int j=0;j<9;++j){
                if(board[i][j]=='.'){
                    for(int k=1;k<=9;++k){
                        char c = '0'+k;
                        if(isValid(board, i, j, c)){
                            board[i][j] = c;
                            if(dfs(board)) return true;
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    bool isValid(vector<vector<char>>& board, int i, int j, char c){
        for(int k=0;k<9;++k){
            if(board[i][k]==c&&k!=j) return false;
            if(board[k][j]==c&&k!=i) return false;
        }
        //0 1 2 | 3 4 5 | 6 7 8
        int a, b;
        a = i/3;
        b = j/3;
        for(int k=0;k<3;++k){
            for(int l=0;l<3;++l){
                if(3*a+k==i&&3*b+l==j) continue;
                if(board[3*a+k][3*b+l]==c) return false;
            }
        }
        return true;
    }
};
```
