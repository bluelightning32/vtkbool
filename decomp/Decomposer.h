/*
   Copyright 2012-2018 Ronald Römer

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

#ifndef __Decomposer_h
#define __Decomposer_h

#include <vector>
#include <iostream>
#include <set>
#include <deque>
#include <map>

#include "Tools.h"

class Vert5 : public Point {
public:
    Vert5 (Point &_p) : Point(_p), refl(false) {}
    bool refl;

    friend std::ostream& operator<< (std::ostream &out, const Vert5 &v) {
        out << "id: " << v.id
            << ", pt: [" << v.x << "," << v.y << "]"
            << ", refl: " << v.refl;
        return out;
    }
};

typedef std::vector<Vert5> VertsType5;

class SubP {
public:
    SubP () : w(99999) {}

    void AddPair (Pair _p, int _w);
    void RestoreS ();

    int w;
    std::deque<Pair> S, S_head, S_tail;
};

typedef std::vector<IdsType> DecResType;

class Decomposer {
    PolyType poly;
    VertsType5 verts;

    int num;

    std::set<Pair> pairs;
    std::map<Pair, SubP> subs;

    bool IsRefl (int a, int b, int c);

    void Forw (int i, int j, int k);
    void Backw (int i, int j, int k);

    void Recover (int i, int k);
    void Collect (int i, int k);

    std::vector<Pair> diags;

public:
    Decomposer (PolyType &_poly);

    void GetDecomposed (DecResType &res);

};

#endif
