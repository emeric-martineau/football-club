import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

const data = {
  "PlanningGeneral": {
      "Match": [
          {
              "Heure": 90000000,
              "Terrain": "Terrain A",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 2,
              "Equipe2": "Equipe 2",
              "Score2": 0
          },
          {
              "Heure": 90000000,
              "Terrain": "Terrain B",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 3",
              "Score1": 5,
              "Equipe2": "Equipe 4",
              "Score2": 2
          },
          {
              "Heure": 90000000,
              "Terrain": "Terrain C",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 4,
              "Equipe2": "Equipe 7",
              "Score2": 1
          },
          {
              "Heure": 90000000,
              "Terrain": "Terrain D",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 8",
              "Score1": 2,
              "Equipe2": "Equipe 9",
              "Score2": 3
          },
          {
              "Heure": 91500000,
              "Terrain": "Terrain A",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 11",
              "Score1": 0,
              "Equipe2": "Equipe 12",
              "Score2": 1
          },
          {
              "Heure": 91500000,
              "Terrain": "Terrain B",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 13",
              "Score1": 0,
              "Equipe2": "Equipe 14",
              "Score2": 0
          },
          {
              "Heure": 91500000,
              "Terrain": "Terrain C",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 16",
              "Score1": 4,
              "Equipe2": "Equipe 17",
              "Score2": 2
          },
          {
              "Heure": 91500000,
              "Terrain": "Terrain D",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 18",
              "Score1": 3,
              "Equipe2": "Equipe 19",
              "Score2": 1
          },
          {
              "Heure": 93000000,
              "Terrain": "Terrain A",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 7",
              "Score1": 2,
              "Equipe2": "Equipe 8",
              "Score2": 0
          },
          {
              "Heure": 93000000,
              "Terrain": "Terrain B",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 1,
              "Equipe2": "Equipe 5",
              "Score2": 2
          },
          {
              "Heure": 93000000,
              "Terrain": "Terrain C",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 1,
              "Equipe2": "Equipe 10",
              "Score2": 1
          },
          {
              "Heure": 93000000,
              "Terrain": "Terrain D",
              "Status": 2,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 2",
              "Score1": 1,
              "Equipe2": "Equipe 3",
              "Score2": 0
          },
          {
              "Heure": 94500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 17",
              "Score1": 0,
              "Equipe2": "Equipe 18",
              "Score2": 0
          },
          {
              "Heure": 94500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 11",
              "Score1": 0,
              "Equipe2": "Equipe 15",
              "Score2": 0
          },
          {
              "Heure": 94500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 16",
              "Score1": 0,
              "Equipe2": "Equipe 20",
              "Score2": 0
          },
          {
              "Heure": 94500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 12",
              "Score1": 0,
              "Equipe2": "Equipe 13",
              "Score2": 0
          },
          {
              "Heure": 100000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 2",
              "Score2": 0
          },
          {
              "Heure": 100000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 3",
              "Score1": 0,
              "Equipe2": "Equipe 4",
              "Score2": 0
          },
          {
              "Heure": 100000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 2",
              "Score2": 0
          },
          {
              "Heure": 100000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 3",
              "Score1": 0,
              "Equipe2": "Equipe 4",
              "Score2": 0
          },
          {
              "Heure": 101500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 19",
              "Score1": 0,
              "Equipe2": "Equipe 20",
              "Score2": 0
          },
          {
              "Heure": 101500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 4",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 101500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 9",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 101500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 14",
              "Score1": 0,
              "Equipe2": "Equipe 15",
              "Score2": 0
          },
          {
              "Heure": 103000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 7",
              "Score2": 0
          },
          {
              "Heure": 103000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 8",
              "Score1": 0,
              "Equipe2": "Equipe 9",
              "Score2": 0
          },
          {
              "Heure": 103000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 7",
              "Score2": 0
          },
          {
              "Heure": 103000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 8",
              "Score1": 0,
              "Equipe2": "Equipe 9",
              "Score2": 0
          },
          {
              "Heure": 104500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 16",
              "Score1": 0,
              "Equipe2": "Equipe 18",
              "Score2": 0
          },
          {
              "Heure": 104500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 3",
              "Score2": 0
          },
          {
              "Heure": 104500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 8",
              "Score2": 0
          },
          {
              "Heure": 104500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 11",
              "Score1": 0,
              "Equipe2": "Equipe 13",
              "Score2": 0
          },
          {
              "Heure": 110000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 110000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 110000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 110000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 111500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 17",
              "Score1": 0,
              "Equipe2": "Equipe 19",
              "Score2": 0
          },
          {
              "Heure": 111500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 2",
              "Score1": 0,
              "Equipe2": "Equipe 4",
              "Score2": 0
          },
          {
              "Heure": 111500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 7",
              "Score1": 0,
              "Equipe2": "Equipe 9",
              "Score2": 0
          },
          {
              "Heure": 111500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 12",
              "Score1": 0,
              "Equipe2": "Equipe 14",
              "Score2": 0
          },
          {
              "Heure": 113000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 7",
              "Score1": 0,
              "Equipe2": "Equipe 8",
              "Score2": 0
          },
          {
              "Heure": 113000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 2",
              "Score1": 0,
              "Equipe2": "Equipe 3",
              "Score2": 0
          },
          {
              "Heure": 113000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 7",
              "Score1": 0,
              "Equipe2": "Equipe 8",
              "Score2": 0
          },
          {
              "Heure": 113000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 2",
              "Score1": 0,
              "Equipe2": "Equipe 3",
              "Score2": 0
          },
          {
              "Heure": 114500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 18",
              "Score1": 0,
              "Equipe2": "Equipe 20",
              "Score2": 0
          },
          {
              "Heure": 114500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 3",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 114500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 8",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 114500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 13",
              "Score1": 0,
              "Equipe2": "Equipe 15",
              "Score2": 0
          },
          {
              "Heure": 120000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 9",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 120000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 4",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 120000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 9",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 120000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 4",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 121500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 8",
              "Score2": 0
          },
          {
              "Heure": 121500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 3",
              "Score2": 0
          },
          {
              "Heure": 121500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 8",
              "Score2": 0
          },
          {
              "Heure": 121500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 3",
              "Score2": 0
          },
          {
              "Heure": 123000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 7",
              "Score1": 0,
              "Equipe2": "Equipe 9",
              "Score2": 0
          },
          {
              "Heure": 123000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 2",
              "Score1": 0,
              "Equipe2": "Equipe 4",
              "Score2": 0
          },
          {
              "Heure": 123000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 7",
              "Score1": 0,
              "Equipe2": "Equipe 9",
              "Score2": 0
          },
          {
              "Heure": 123000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 2",
              "Score1": 0,
              "Equipe2": "Equipe 4",
              "Score2": 0
          },
          {
              "Heure": 124500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 8",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 124500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 3",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 124500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 8",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 124500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 3",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 130000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 16",
              "Score1": 0,
              "Equipe2": "Equipe 19",
              "Score2": 0
          },
          {
              "Heure": 130000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 4",
              "Score2": 0
          },
          {
              "Heure": 130000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 9",
              "Score2": 0
          },
          {
              "Heure": 130000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 11",
              "Score1": 0,
              "Equipe2": "Equipe 14",
              "Score2": 0
          },
          {
              "Heure": 131500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe D",
              "MatchID": 0,
              "Equipe1": "Equipe 17",
              "Score1": 0,
              "Equipe2": "Equipe 20",
              "Score2": 0
          },
          {
              "Heure": 131500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 2",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 131500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 7",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 131500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Groupe C",
              "MatchID": 0,
              "Equipe1": "Equipe 12",
              "Score1": 0,
              "Equipe2": "Equipe 15",
              "Score2": 0
          },
          {
              "Heure": 133000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 17-20ème",
              "MatchID": 1,
              "Equipe1": "5ème groupe C",
              "Score1": 0,
              "Equipe2": "5ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 133000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 17-20ème",
              "MatchID": 1,
              "Equipe1": "5ème groupe A",
              "Score1": 0,
              "Equipe2": "5ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 133000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 13-16ème",
              "MatchID": 2,
              "Equipe1": "4ème groupe C",
              "Score1": 0,
              "Equipe2": "4ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 133000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 13-16ème",
              "MatchID": 2,
              "Equipe1": "4ème groupe A",
              "Score1": 0,
              "Equipe2": "4ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 134500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 13-16ème",
              "MatchID": 2,
              "Equipe1": "4ème groupe A",
              "Score1": 0,
              "Equipe2": "4ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 134500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 17-20ème",
              "MatchID": 1,
              "Equipe1": "5ème groupe A",
              "Score1": 0,
              "Equipe2": "5ème groupe C",
              "Score2": 0
          },
          {
              "Heure": 134500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 17-20ème",
              "MatchID": 1,
              "Equipe1": "5ème groupe B",
              "Score1": 0,
              "Equipe2": "5ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 134500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 13-16ème",
              "MatchID": 2,
              "Equipe1": "4ème groupe B",
              "Score1": 0,
              "Equipe2": "4ème groupe C",
              "Score2": 0
          },
          {
              "Heure": 140000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 9",
              "Score2": 0
          },
          {
              "Heure": 140000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 4",
              "Score2": 0
          },
          {
              "Heure": 140000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 6",
              "Score1": 0,
              "Equipe2": "Equipe 9",
              "Score2": 0
          },
          {
              "Heure": 140000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 1",
              "Score1": 0,
              "Equipe2": "Equipe 4",
              "Score2": 0
          },
          {
              "Heure": 141500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 13-16ème",
              "MatchID": 2,
              "Equipe1": "4ème groupe B",
              "Score1": 0,
              "Equipe2": "4ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 141500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 17-20ème",
              "MatchID": 1,
              "Equipe1": "5ème groupe A",
              "Score1": 0,
              "Equipe2": "5ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 141500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 17-20ème",
              "MatchID": 1,
              "Equipe1": "5ème groupe B",
              "Score1": 0,
              "Equipe2": "5ème groupe C",
              "Score2": 0
          },
          {
              "Heure": 141500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 13-16ème",
              "MatchID": 2,
              "Equipe1": "4ème groupe A",
              "Score1": 0,
              "Equipe2": "4ème groupe C",
              "Score2": 0
          },
          {
              "Heure": 143000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 7",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 143000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 2",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 143000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Groupe B",
              "MatchID": 0,
              "Equipe1": "Equipe 7",
              "Score1": 0,
              "Equipe2": "Equipe 10",
              "Score2": 0
          },
          {
              "Heure": 143000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Groupe A",
              "MatchID": 0,
              "Equipe1": "Equipe 2",
              "Score1": 0,
              "Equipe2": "Equipe 5",
              "Score2": 0
          },
          {
              "Heure": 144500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 9-12ème",
              "MatchID": 3,
              "Equipe1": "3ème groupe A",
              "Score1": 0,
              "Equipe2": "3ème groupe C",
              "Score2": 0
          },
          {
              "Heure": 144500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 9-12ème",
              "MatchID": 3,
              "Equipe1": "3ème groupe B",
              "Score1": 0,
              "Equipe2": "3ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 144500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Classement 9-10ème",
              "MatchID": 1,
              "Equipe1": "5ème groupe A",
              "Score1": 0,
              "Equipe2": "5ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 144500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Classement 7-8ème",
              "MatchID": 2,
              "Equipe1": "4ème groupe A",
              "Score1": 0,
              "Equipe2": "4ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 150000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Classement 9-10ème",
              "MatchID": 1,
              "Equipe1": "5ème groupe A",
              "Score1": 0,
              "Equipe2": "5ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 150000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 9-12ème",
              "MatchID": 3,
              "Equipe1": "3ème groupe B",
              "Score1": 0,
              "Equipe2": "3ème groupe C",
              "Score2": 0
          },
          {
              "Heure": 150000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 9-12ème",
              "MatchID": 3,
              "Equipe1": "3ème groupe A",
              "Score1": 0,
              "Equipe2": "3ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 150000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Classement 7-8ème",
              "MatchID": 2,
              "Equipe1": "4ème groupe A",
              "Score1": 0,
              "Equipe2": "4ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 151500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 9-12ème",
              "MatchID": 3,
              "Equipe1": "3ème groupe A",
              "Score1": 0,
              "Equipe2": "3ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 151500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 9-12ème",
              "MatchID": 3,
              "Equipe1": "3ème groupe C",
              "Score1": 0,
              "Equipe2": "3ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 153000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "1/4 Finale 1",
              "MatchID": 4,
              "Equipe1": "1er groupe A",
              "Score1": 0,
              "Equipe2": "2ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 153000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "1/4 Finale 2",
              "MatchID": 5,
              "Equipe1": "1er groupe B",
              "Score1": 0,
              "Equipe2": "2ème groupe A",
              "Score2": 0
          },
          {
              "Heure": 153000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "1/4 Finale 3",
              "MatchID": 6,
              "Equipe1": "1er groupe C",
              "Score1": 0,
              "Equipe2": "2ème groupe D",
              "Score2": 0
          },
          {
              "Heure": 153000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "1/4 Finale 4",
              "MatchID": 7,
              "Equipe1": "1er groupe D",
              "Score1": 0,
              "Equipe2": "2ème groupe C",
              "Score2": 0
          },
          {
              "Heure": 154500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Classement 5-6ème",
              "MatchID": 3,
              "Equipe1": "3ème groupe A",
              "Score1": 0,
              "Equipe2": "3ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 154500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Classement 3-4ème",
              "MatchID": 4,
              "Equipe1": "2ème groupe A",
              "Score1": 0,
              "Equipe2": "2ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 154500000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Classement 5-6ème",
              "MatchID": 3,
              "Equipe1": "3ème groupe A",
              "Score1": 0,
              "Equipe2": "3ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 154500000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Classement 3-4ème",
              "MatchID": 4,
              "Equipe1": "2ème groupe A",
              "Score1": 0,
              "Equipe2": "2ème groupe B",
              "Score2": 0
          },
          {
              "Heure": 160000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 5-8ème",
              "MatchID": 8,
              "Equipe1": "Perdant match 4",
              "Score1": 0,
              "Equipe2": "Perdant match 6",
              "Score2": 0
          },
          {
              "Heure": 160000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 5-8ème",
              "MatchID": 9,
              "Equipe1": "Perdant match 5",
              "Score1": 0,
              "Equipe2": "Perdant match 7",
              "Score2": 0
          },
          {
              "Heure": 160000000,
              "Terrain": "Terrain C",
              "Status": 1,
              "CategoryID": 1,
              "CategoryNom": "U10",
              "MatchNom": "Finale U10",
              "MatchID": 5,
              "Equipe1": "1er groupe A",
              "Score1": 0,
              "Equipe2": "1er groupe B",
              "Score2": 0
          },
          {
              "Heure": 160000000,
              "Terrain": "Terrain D",
              "Status": 1,
              "CategoryID": 2,
              "CategoryNom": "U11",
              "MatchNom": "Finale U11",
              "MatchID": 5,
              "Equipe1": "1er groupe A",
              "Score1": 0,
              "Equipe2": "1er groupe B",
              "Score2": 0
          },
          {
              "Heure": 161500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "1/2 Finale 1",
              "MatchID": 10,
              "Equipe1": "Vainqueur match 4",
              "Score1": 0,
              "Equipe2": "Vainqueur match 6",
              "Score2": 0
          },
          {
              "Heure": 161500000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "1/2 Finale 2",
              "MatchID": 11,
              "Equipe1": "Vainqueur match 5",
              "Score1": 0,
              "Equipe2": "Vainqueur match 7",
              "Score2": 0
          },
          {
              "Heure": 163000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 7-8ème",
              "MatchID": 12,
              "Equipe1": "Perdant match 8",
              "Score1": 0,
              "Equipe2": "Perdant match 9",
              "Score2": 0
          },
          {
              "Heure": 163000000,
              "Terrain": "Terrain B",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 5-6ème",
              "MatchID": 13,
              "Equipe1": "Vainqueur match 8",
              "Score1": 0,
              "Equipe2": "Vainqueur match 9",
              "Score2": 0
          },
          {
              "Heure": 164500000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Classement 3-4ème",
              "MatchID": 14,
              "Equipe1": "Perdant match 10",
              "Score1": 0,
              "Equipe2": "Perdant match 11",
              "Score2": 0
          },
          {
              "Heure": 170000000,
              "Terrain": "Terrain A",
              "Status": 1,
              "CategoryID": 3,
              "CategoryNom": "U12/U13",
              "MatchNom": "Finale U12/U13",
              "MatchID": 15,
              "Equipe1": "Vainqueur match 10",
              "Score1": 0,
              "Equipe2": "Vainqueur match 11",
              "Score2": 0
          }
      ]
  },
  "NombreCategories": 3,
  "Categorie": [
      {
          "Name": "U10",
          "NumberOfGroup": 2,
          "Groupe": [
              {
                  "NomGroupe": "Groupe A",
                  "Classement": {
                      "Place": [
                          {
                              "Equipe": "Equipe 1",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 2",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 3",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 4",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 5",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          }
                      ]
                  },
                  "Matchs": {
                      "Match": [
                          {
                              "Heure": 100000000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 2",
                              "Score2": 0
                          },
                          {
                              "Heure": 100000000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 3",
                              "Score1": 0,
                              "Equipe2": "Equipe 4",
                              "Score2": 0
                          },
                          {
                              "Heure": 110000000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          },
                          {
                              "Heure": 113000000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 2",
                              "Score1": 0,
                              "Equipe2": "Equipe 3",
                              "Score2": 0
                          },
                          {
                              "Heure": 120000000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 4",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          },
                          {
                              "Heure": 121500000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 3",
                              "Score2": 0
                          },
                          {
                              "Heure": 123000000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 2",
                              "Score1": 0,
                              "Equipe2": "Equipe 4",
                              "Score2": 0
                          },
                          {
                              "Heure": 124500000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 3",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          },
                          {
                              "Heure": 140000000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 4",
                              "Score2": 0
                          },
                          {
                              "Heure": 143000000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 2",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          }
                      ]
                  }
              },
              {
                  "NomGroupe": "Groupe B",
                  "Classement": {
                      "Place": [
                          {
                              "Equipe": "Equipe 6",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 7",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 8",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 9",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 10",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          }
                      ]
                  },
                  "Matchs": {
                      "Match": [
                          {
                              "Heure": 103000000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 7",
                              "Score2": 0
                          },
                          {
                              "Heure": 103000000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 8",
                              "Score1": 0,
                              "Equipe2": "Equipe 9",
                              "Score2": 0
                          },
                          {
                              "Heure": 110000000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          },
                          {
                              "Heure": 113000000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 7",
                              "Score1": 0,
                              "Equipe2": "Equipe 8",
                              "Score2": 0
                          },
                          {
                              "Heure": 120000000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 9",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          },
                          {
                              "Heure": 121500000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 8",
                              "Score2": 0
                          },
                          {
                              "Heure": 123000000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 7",
                              "Score1": 0,
                              "Equipe2": "Equipe 9",
                              "Score2": 0
                          },
                          {
                              "Heure": 124500000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 8",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          },
                          {
                              "Heure": 140000000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 9",
                              "Score2": 0
                          },
                          {
                              "Heure": 143000000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 1,
                              "CategoryNom": "U10",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 7",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          }
                      ]
                  }
              }
          ],
          "PhaseFinale": {
              "Matchs": {
                  "Match": [
                      {
                          "Heure": 144500000,
                          "Terrain": "Terrain C",
                          "Status": 1,
                          "CategoryID": 1,
                          "CategoryNom": "U10",
                          "MatchNom": "Classement 9-10ème",
                          "MatchID": 1,
                          "Equipe1": "5ème groupe A",
                          "Score1": 0,
                          "Equipe2": "5ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 144500000,
                          "Terrain": "Terrain D",
                          "Status": 1,
                          "CategoryID": 1,
                          "CategoryNom": "U10",
                          "MatchNom": "Classement 7-8ème",
                          "MatchID": 2,
                          "Equipe1": "4ème groupe A",
                          "Score1": 0,
                          "Equipe2": "4ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 154500000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 1,
                          "CategoryNom": "U10",
                          "MatchNom": "Classement 5-6ème",
                          "MatchID": 3,
                          "Equipe1": "3ème groupe A",
                          "Score1": 0,
                          "Equipe2": "3ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 154500000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 1,
                          "CategoryNom": "U10",
                          "MatchNom": "Classement 3-4ème",
                          "MatchID": 4,
                          "Equipe1": "2ème groupe A",
                          "Score1": 0,
                          "Equipe2": "2ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 160000000,
                          "Terrain": "Terrain C",
                          "Status": 1,
                          "CategoryID": 1,
                          "CategoryNom": "U10",
                          "MatchNom": "Finale U10",
                          "MatchID": 5,
                          "Equipe1": "1er groupe A",
                          "Score1": 0,
                          "Equipe2": "1er groupe B",
                          "Score2": 0
                      }
                  ]
              }
          }
      },
      {
          "Name": "U11",
          "NumberOfGroup": 2,
          "Groupe": [
              {
                  "NomGroupe": "Groupe A",
                  "Classement": {
                      "Place": [
                          {
                              "Equipe": "Equipe 1",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 2",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 3",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 4",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 5",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          }
                      ]
                  },
                  "Matchs": {
                      "Match": [
                          {
                              "Heure": 100000000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 2",
                              "Score2": 0
                          },
                          {
                              "Heure": 100000000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 3",
                              "Score1": 0,
                              "Equipe2": "Equipe 4",
                              "Score2": 0
                          },
                          {
                              "Heure": 110000000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          },
                          {
                              "Heure": 113000000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 2",
                              "Score1": 0,
                              "Equipe2": "Equipe 3",
                              "Score2": 0
                          },
                          {
                              "Heure": 120000000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 4",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          },
                          {
                              "Heure": 121500000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 3",
                              "Score2": 0
                          },
                          {
                              "Heure": 123000000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 2",
                              "Score1": 0,
                              "Equipe2": "Equipe 4",
                              "Score2": 0
                          },
                          {
                              "Heure": 124500000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 3",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          },
                          {
                              "Heure": 140000000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 4",
                              "Score2": 0
                          },
                          {
                              "Heure": 143000000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 2",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          }
                      ]
                  }
              },
              {
                  "NomGroupe": "Groupe B",
                  "Classement": {
                      "Place": [
                          {
                              "Equipe": "Equipe 6",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 7",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 8",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 9",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 10",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          }
                      ]
                  },
                  "Matchs": {
                      "Match": [
                          {
                              "Heure": 103000000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 7",
                              "Score2": 0
                          },
                          {
                              "Heure": 103000000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 8",
                              "Score1": 0,
                              "Equipe2": "Equipe 9",
                              "Score2": 0
                          },
                          {
                              "Heure": 110000000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          },
                          {
                              "Heure": 113000000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 7",
                              "Score1": 0,
                              "Equipe2": "Equipe 8",
                              "Score2": 0
                          },
                          {
                              "Heure": 120000000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 9",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          },
                          {
                              "Heure": 121500000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 8",
                              "Score2": 0
                          },
                          {
                              "Heure": 123000000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 7",
                              "Score1": 0,
                              "Equipe2": "Equipe 9",
                              "Score2": 0
                          },
                          {
                              "Heure": 124500000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 8",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          },
                          {
                              "Heure": 140000000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 9",
                              "Score2": 0
                          },
                          {
                              "Heure": 143000000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 2,
                              "CategoryNom": "U11",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 7",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          }
                      ]
                  }
              }
          ],
          "PhaseFinale": {
              "Matchs": {
                  "Match": [
                      {
                          "Heure": 150000000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 2,
                          "CategoryNom": "U11",
                          "MatchNom": "Classement 9-10ème",
                          "MatchID": 1,
                          "Equipe1": "5ème groupe A",
                          "Score1": 0,
                          "Equipe2": "5ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 150000000,
                          "Terrain": "Terrain D",
                          "Status": 1,
                          "CategoryID": 2,
                          "CategoryNom": "U11",
                          "MatchNom": "Classement 7-8ème",
                          "MatchID": 2,
                          "Equipe1": "4ème groupe A",
                          "Score1": 0,
                          "Equipe2": "4ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 154500000,
                          "Terrain": "Terrain C",
                          "Status": 1,
                          "CategoryID": 2,
                          "CategoryNom": "U11",
                          "MatchNom": "Classement 5-6ème",
                          "MatchID": 3,
                          "Equipe1": "3ème groupe A",
                          "Score1": 0,
                          "Equipe2": "3ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 154500000,
                          "Terrain": "Terrain D",
                          "Status": 1,
                          "CategoryID": 2,
                          "CategoryNom": "U11",
                          "MatchNom": "Classement 3-4ème",
                          "MatchID": 4,
                          "Equipe1": "2ème groupe A",
                          "Score1": 0,
                          "Equipe2": "2ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 160000000,
                          "Terrain": "Terrain D",
                          "Status": 1,
                          "CategoryID": 2,
                          "CategoryNom": "U11",
                          "MatchNom": "Finale U11",
                          "MatchID": 5,
                          "Equipe1": "1er groupe A",
                          "Score1": 0,
                          "Equipe2": "1er groupe B",
                          "Score2": 0
                      }
                  ]
              }
          }
      },
      {
          "Name": "U12/U13",
          "NumberOfGroup": 4,
          "Groupe": [
              {
                  "NomGroupe": "Groupe A",
                  "Classement": {
                      "Place": [
                          {
                              "Equipe": "Equipe 1",
                              "J": 2,
                              "V": 1,
                              "N": 0,
                              "D": 1,
                              "BP": 3,
                              "BC": 2,
                              "Diff": 1,
                              "Points": 4
                          },
                          {
                              "Equipe": "Equipe 5",
                              "J": 1,
                              "V": 1,
                              "N": 0,
                              "D": 0,
                              "BP": 2,
                              "BC": 1,
                              "Diff": 1,
                              "Points": 4
                          },
                          {
                              "Equipe": "Equipe 2",
                              "J": 2,
                              "V": 1,
                              "N": 0,
                              "D": 1,
                              "BP": 1,
                              "BC": 2,
                              "Diff": -1,
                              "Points": 4
                          },
                          {
                              "Equipe": "Equipe 3",
                              "J": 2,
                              "V": 1,
                              "N": 0,
                              "D": 1,
                              "BP": 5,
                              "BC": 3,
                              "Diff": 2,
                              "Points": 4
                          },
                          {
                              "Equipe": "Equipe 4",
                              "J": 1,
                              "V": 0,
                              "N": 0,
                              "D": 1,
                              "BP": 2,
                              "BC": 5,
                              "Diff": -3,
                              "Points": 0
                          }
                      ]
                  },
                  "Matchs": {
                      "Match": [
                          {
                              "Heure": 90000000,
                              "Terrain": "Terrain A",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 2,
                              "Equipe2": "Equipe 2",
                              "Score2": 0
                          },
                          {
                              "Heure": 90000000,
                              "Terrain": "Terrain B",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 3",
                              "Score1": 5,
                              "Equipe2": "Equipe 4",
                              "Score2": 2
                          },
                          {
                              "Heure": 93000000,
                              "Terrain": "Terrain B",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 1,
                              "Equipe2": "Equipe 5",
                              "Score2": 2
                          },
                          {
                              "Heure": 93000000,
                              "Terrain": "Terrain D",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 2",
                              "Score1": 1,
                              "Equipe2": "Equipe 3",
                              "Score2": 0
                          },
                          {
                              "Heure": 101500000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 4",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          },
                          {
                              "Heure": 104500000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 3",
                              "Score2": 0
                          },
                          {
                              "Heure": 111500000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 2",
                              "Score1": 0,
                              "Equipe2": "Equipe 4",
                              "Score2": 0
                          },
                          {
                              "Heure": 114500000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 3",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          },
                          {
                              "Heure": 130000000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 1",
                              "Score1": 0,
                              "Equipe2": "Equipe 4",
                              "Score2": 0
                          },
                          {
                              "Heure": 131500000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe A",
                              "MatchID": 0,
                              "Equipe1": "Equipe 2",
                              "Score1": 0,
                              "Equipe2": "Equipe 5",
                              "Score2": 0
                          }
                      ]
                  }
              },
              {
                  "NomGroupe": "Groupe B",
                  "Classement": {
                      "Place": [
                          {
                              "Equipe": "Equipe 6",
                              "J": 2,
                              "V": 1,
                              "N": 1,
                              "D": 0,
                              "BP": 5,
                              "BC": 2,
                              "Diff": 3,
                              "Points": 5
                          },
                          {
                              "Equipe": "Equipe 9",
                              "J": 1,
                              "V": 1,
                              "N": 0,
                              "D": 0,
                              "BP": 3,
                              "BC": 2,
                              "Diff": 1,
                              "Points": 4
                          },
                          {
                              "Equipe": "Equipe 7",
                              "J": 2,
                              "V": 1,
                              "N": 0,
                              "D": 1,
                              "BP": 3,
                              "BC": 4,
                              "Diff": -1,
                              "Points": 4
                          },
                          {
                              "Equipe": "Equipe 10",
                              "J": 1,
                              "V": 0,
                              "N": 1,
                              "D": 0,
                              "BP": 1,
                              "BC": 1,
                              "Diff": 0,
                              "Points": 1
                          },
                          {
                              "Equipe": "Equipe 8",
                              "J": 2,
                              "V": 0,
                              "N": 0,
                              "D": 2,
                              "BP": 2,
                              "BC": 5,
                              "Diff": -3,
                              "Points": 0
                          }
                      ]
                  },
                  "Matchs": {
                      "Match": [
                          {
                              "Heure": 90000000,
                              "Terrain": "Terrain C",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 4,
                              "Equipe2": "Equipe 7",
                              "Score2": 1
                          },
                          {
                              "Heure": 90000000,
                              "Terrain": "Terrain D",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 8",
                              "Score1": 2,
                              "Equipe2": "Equipe 9",
                              "Score2": 3
                          },
                          {
                              "Heure": 93000000,
                              "Terrain": "Terrain A",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 7",
                              "Score1": 2,
                              "Equipe2": "Equipe 8",
                              "Score2": 0
                          },
                          {
                              "Heure": 93000000,
                              "Terrain": "Terrain C",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 1,
                              "Equipe2": "Equipe 10",
                              "Score2": 1
                          },
                          {
                              "Heure": 101500000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 9",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          },
                          {
                              "Heure": 104500000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 8",
                              "Score2": 0
                          },
                          {
                              "Heure": 111500000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 7",
                              "Score1": 0,
                              "Equipe2": "Equipe 9",
                              "Score2": 0
                          },
                          {
                              "Heure": 114500000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 8",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          },
                          {
                              "Heure": 130000000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 6",
                              "Score1": 0,
                              "Equipe2": "Equipe 9",
                              "Score2": 0
                          },
                          {
                              "Heure": 131500000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe B",
                              "MatchID": 0,
                              "Equipe1": "Equipe 7",
                              "Score1": 0,
                              "Equipe2": "Equipe 10",
                              "Score2": 0
                          }
                      ]
                  }
              },
              {
                  "NomGroupe": "Groupe C",
                  "Classement": {
                      "Place": [
                          {
                              "Equipe": "Equipe 12",
                              "J": 1,
                              "V": 1,
                              "N": 0,
                              "D": 0,
                              "BP": 1,
                              "BC": 0,
                              "Diff": 1,
                              "Points": 4
                          },
                          {
                              "Equipe": "Equipe 14",
                              "J": 1,
                              "V": 0,
                              "N": 1,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 1
                          },
                          {
                              "Equipe": "Equipe 13",
                              "J": 1,
                              "V": 0,
                              "N": 1,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 1
                          },
                          {
                              "Equipe": "Equipe 15",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 11",
                              "J": 1,
                              "V": 0,
                              "N": 0,
                              "D": 1,
                              "BP": 0,
                              "BC": 1,
                              "Diff": -1,
                              "Points": 0
                          }
                      ]
                  },
                  "Matchs": {
                      "Match": [
                          {
                              "Heure": 91500000,
                              "Terrain": "Terrain A",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 11",
                              "Score1": 0,
                              "Equipe2": "Equipe 12",
                              "Score2": 1
                          },
                          {
                              "Heure": 91500000,
                              "Terrain": "Terrain B",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 13",
                              "Score1": 0,
                              "Equipe2": "Equipe 14",
                              "Score2": 0
                          },
                          {
                              "Heure": 94500000,
                              "Terrain": "Terrain B",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 11",
                              "Score1": 0,
                              "Equipe2": "Equipe 15",
                              "Score2": 0
                          },
                          {
                              "Heure": 94500000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 12",
                              "Score1": 0,
                              "Equipe2": "Equipe 13",
                              "Score2": 0
                          },
                          {
                              "Heure": 101500000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 14",
                              "Score1": 0,
                              "Equipe2": "Equipe 15",
                              "Score2": 0
                          },
                          {
                              "Heure": 104500000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 11",
                              "Score1": 0,
                              "Equipe2": "Equipe 13",
                              "Score2": 0
                          },
                          {
                              "Heure": 111500000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 12",
                              "Score1": 0,
                              "Equipe2": "Equipe 14",
                              "Score2": 0
                          },
                          {
                              "Heure": 114500000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 13",
                              "Score1": 0,
                              "Equipe2": "Equipe 15",
                              "Score2": 0
                          },
                          {
                              "Heure": 130000000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 11",
                              "Score1": 0,
                              "Equipe2": "Equipe 14",
                              "Score2": 0
                          },
                          {
                              "Heure": 131500000,
                              "Terrain": "Terrain D",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe C",
                              "MatchID": 0,
                              "Equipe1": "Equipe 12",
                              "Score1": 0,
                              "Equipe2": "Equipe 15",
                              "Score2": 0
                          }
                      ]
                  }
              },
              {
                  "NomGroupe": "Groupe D",
                  "Classement": {
                      "Place": [
                          {
                              "Equipe": "Equipe 16",
                              "J": 1,
                              "V": 1,
                              "N": 0,
                              "D": 0,
                              "BP": 4,
                              "BC": 2,
                              "Diff": 2,
                              "Points": 4
                          },
                          {
                              "Equipe": "Equipe 18",
                              "J": 1,
                              "V": 1,
                              "N": 0,
                              "D": 0,
                              "BP": 3,
                              "BC": 1,
                              "Diff": 2,
                              "Points": 4
                          },
                          {
                              "Equipe": "Equipe 20",
                              "J": 0,
                              "V": 0,
                              "N": 0,
                              "D": 0,
                              "BP": 0,
                              "BC": 0,
                              "Diff": 0,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 17",
                              "J": 1,
                              "V": 0,
                              "N": 0,
                              "D": 1,
                              "BP": 2,
                              "BC": 4,
                              "Diff": -2,
                              "Points": 0
                          },
                          {
                              "Equipe": "Equipe 19",
                              "J": 1,
                              "V": 0,
                              "N": 0,
                              "D": 1,
                              "BP": 1,
                              "BC": 3,
                              "Diff": -2,
                              "Points": 0
                          }
                      ]
                  },
                  "Matchs": {
                      "Match": [
                          {
                              "Heure": 91500000,
                              "Terrain": "Terrain C",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 16",
                              "Score1": 4,
                              "Equipe2": "Equipe 17",
                              "Score2": 2
                          },
                          {
                              "Heure": 91500000,
                              "Terrain": "Terrain D",
                              "Status": 2,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 18",
                              "Score1": 3,
                              "Equipe2": "Equipe 19",
                              "Score2": 1
                          },
                          {
                              "Heure": 94500000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 17",
                              "Score1": 0,
                              "Equipe2": "Equipe 18",
                              "Score2": 0
                          },
                          {
                              "Heure": 94500000,
                              "Terrain": "Terrain C",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 16",
                              "Score1": 0,
                              "Equipe2": "Equipe 20",
                              "Score2": 0
                          },
                          {
                              "Heure": 101500000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 19",
                              "Score1": 0,
                              "Equipe2": "Equipe 20",
                              "Score2": 0
                          },
                          {
                              "Heure": 104500000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 16",
                              "Score1": 0,
                              "Equipe2": "Equipe 18",
                              "Score2": 0
                          },
                          {
                              "Heure": 111500000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 17",
                              "Score1": 0,
                              "Equipe2": "Equipe 19",
                              "Score2": 0
                          },
                          {
                              "Heure": 114500000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 18",
                              "Score1": 0,
                              "Equipe2": "Equipe 20",
                              "Score2": 0
                          },
                          {
                              "Heure": 130000000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 16",
                              "Score1": 0,
                              "Equipe2": "Equipe 19",
                              "Score2": 0
                          },
                          {
                              "Heure": 131500000,
                              "Terrain": "Terrain A",
                              "Status": 1,
                              "CategoryID": 3,
                              "CategoryNom": "U12/U13",
                              "MatchNom": "Groupe D",
                              "MatchID": 0,
                              "Equipe1": "Equipe 17",
                              "Score1": 0,
                              "Equipe2": "Equipe 20",
                              "Score2": 0
                          }
                      ]
                  }
              }
          ],
          "PhaseFinale": {
              "Matchs": {
                  "Match": [
                      {
                          "Heure": 133000000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 17-20ème",
                          "MatchID": 1,
                          "Equipe1": "5ème groupe C",
                          "Score1": 0,
                          "Equipe2": "5ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 133000000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 17-20ème",
                          "MatchID": 1,
                          "Equipe1": "5ème groupe A",
                          "Score1": 0,
                          "Equipe2": "5ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 133000000,
                          "Terrain": "Terrain C",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 13-16ème",
                          "MatchID": 2,
                          "Equipe1": "4ème groupe C",
                          "Score1": 0,
                          "Equipe2": "4ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 133000000,
                          "Terrain": "Terrain D",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 13-16ème",
                          "MatchID": 2,
                          "Equipe1": "4ème groupe A",
                          "Score1": 0,
                          "Equipe2": "4ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 134500000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 13-16ème",
                          "MatchID": 2,
                          "Equipe1": "4ème groupe A",
                          "Score1": 0,
                          "Equipe2": "4ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 134500000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 17-20ème",
                          "MatchID": 1,
                          "Equipe1": "5ème groupe A",
                          "Score1": 0,
                          "Equipe2": "5ème groupe C",
                          "Score2": 0
                      },
                      {
                          "Heure": 134500000,
                          "Terrain": "Terrain C",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 17-20ème",
                          "MatchID": 1,
                          "Equipe1": "5ème groupe B",
                          "Score1": 0,
                          "Equipe2": "5ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 134500000,
                          "Terrain": "Terrain D",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 13-16ème",
                          "MatchID": 2,
                          "Equipe1": "4ème groupe B",
                          "Score1": 0,
                          "Equipe2": "4ème groupe C",
                          "Score2": 0
                      },
                      {
                          "Heure": 141500000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 13-16ème",
                          "MatchID": 2,
                          "Equipe1": "4ème groupe B",
                          "Score1": 0,
                          "Equipe2": "4ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 141500000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 17-20ème",
                          "MatchID": 1,
                          "Equipe1": "5ème groupe A",
                          "Score1": 0,
                          "Equipe2": "5ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 141500000,
                          "Terrain": "Terrain C",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 17-20ème",
                          "MatchID": 1,
                          "Equipe1": "5ème groupe B",
                          "Score1": 0,
                          "Equipe2": "5ème groupe C",
                          "Score2": 0
                      },
                      {
                          "Heure": 141500000,
                          "Terrain": "Terrain D",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 13-16ème",
                          "MatchID": 2,
                          "Equipe1": "4ème groupe A",
                          "Score1": 0,
                          "Equipe2": "4ème groupe C",
                          "Score2": 0
                      },
                      {
                          "Heure": 144500000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 9-12ème",
                          "MatchID": 3,
                          "Equipe1": "3ème groupe A",
                          "Score1": 0,
                          "Equipe2": "3ème groupe C",
                          "Score2": 0
                      },
                      {
                          "Heure": 144500000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 9-12ème",
                          "MatchID": 3,
                          "Equipe1": "3ème groupe B",
                          "Score1": 0,
                          "Equipe2": "3ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 150000000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 9-12ème",
                          "MatchID": 3,
                          "Equipe1": "3ème groupe B",
                          "Score1": 0,
                          "Equipe2": "3ème groupe C",
                          "Score2": 0
                      },
                      {
                          "Heure": 150000000,
                          "Terrain": "Terrain C",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 9-12ème",
                          "MatchID": 3,
                          "Equipe1": "3ème groupe A",
                          "Score1": 0,
                          "Equipe2": "3ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 151500000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 9-12ème",
                          "MatchID": 3,
                          "Equipe1": "3ème groupe A",
                          "Score1": 0,
                          "Equipe2": "3ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 151500000,
                          "Terrain": "Terrain C",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 9-12ème",
                          "MatchID": 3,
                          "Equipe1": "3ème groupe C",
                          "Score1": 0,
                          "Equipe2": "3ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 153000000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "1/4 Finale 1",
                          "MatchID": 4,
                          "Equipe1": "1er groupe A",
                          "Score1": 0,
                          "Equipe2": "2ème groupe B",
                          "Score2": 0
                      },
                      {
                          "Heure": 153000000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "1/4 Finale 2",
                          "MatchID": 5,
                          "Equipe1": "1er groupe B",
                          "Score1": 0,
                          "Equipe2": "2ème groupe A",
                          "Score2": 0
                      },
                      {
                          "Heure": 153000000,
                          "Terrain": "Terrain C",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "1/4 Finale 3",
                          "MatchID": 6,
                          "Equipe1": "1er groupe C",
                          "Score1": 0,
                          "Equipe2": "2ème groupe D",
                          "Score2": 0
                      },
                      {
                          "Heure": 153000000,
                          "Terrain": "Terrain D",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "1/4 Finale 4",
                          "MatchID": 7,
                          "Equipe1": "1er groupe D",
                          "Score1": 0,
                          "Equipe2": "2ème groupe C",
                          "Score2": 0
                      },
                      {
                          "Heure": 160000000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 5-8ème",
                          "MatchID": 8,
                          "Equipe1": "Perdant match 4",
                          "Score1": 0,
                          "Equipe2": "Perdant match 6",
                          "Score2": 0
                      },
                      {
                          "Heure": 160000000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 5-8ème",
                          "MatchID": 9,
                          "Equipe1": "Perdant match 5",
                          "Score1": 0,
                          "Equipe2": "Perdant match 7",
                          "Score2": 0
                      },
                      {
                          "Heure": 161500000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "1/2 Finale 1",
                          "MatchID": 10,
                          "Equipe1": "Vainqueur match 4",
                          "Score1": 0,
                          "Equipe2": "Vainqueur match 6",
                          "Score2": 0
                      },
                      {
                          "Heure": 161500000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "1/2 Finale 2",
                          "MatchID": 11,
                          "Equipe1": "Vainqueur match 5",
                          "Score1": 0,
                          "Equipe2": "Vainqueur match 7",
                          "Score2": 0
                      },
                      {
                          "Heure": 163000000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 7-8ème",
                          "MatchID": 12,
                          "Equipe1": "Perdant match 8",
                          "Score1": 0,
                          "Equipe2": "Perdant match 9",
                          "Score2": 0
                      },
                      {
                          "Heure": 163000000,
                          "Terrain": "Terrain B",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 5-6ème",
                          "MatchID": 13,
                          "Equipe1": "Vainqueur match 8",
                          "Score1": 0,
                          "Equipe2": "Vainqueur match 9",
                          "Score2": 0
                      },
                      {
                          "Heure": 164500000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Classement 3-4ème",
                          "MatchID": 14,
                          "Equipe1": "Perdant match 10",
                          "Score1": 0,
                          "Equipe2": "Perdant match 11",
                          "Score2": 0
                      },
                      {
                          "Heure": 170000000,
                          "Terrain": "Terrain A",
                          "Status": 1,
                          "CategoryID": 3,
                          "CategoryNom": "U12/U13",
                          "MatchNom": "Finale U12/U13",
                          "MatchID": 15,
                          "Equipe1": "Vainqueur match 10",
                          "Score1": 0,
                          "Equipe2": "Vainqueur match 11",
                          "Score2": 0
                      }
                  ]
              }
          }
      }
  ]
};

export class Team {
  constructor(private name: string, private score: number) { }

  getName(): string {
    return this.name;
  }

  getScore(): number {
    return this.score;
  }
}

export class Match {
  constructor(private hour: number,
    private played: boolean,
    private categoryId: number,
    private name: string,
    private teams: Team[]) { }

  getHour(): number {
    return this.hour;
  }

  isPlayed(): boolean {
    return this.played;
  }

  getCategoryId(): number {
    return this.categoryId;
  }

  getName(): string {
    return this.name;
  }

  getTeams(): Team[] {
    return this.teams;
  }
}

export class Ground {
  constructor(private name: string, private matchs: Match[]) {}

  getName(): string {
    return this.name;
  }

  getMatchs(): Match[] {
    return this.matchs;
  }
}

export class Rank {
    constructor(
        private teamName: string,
        private play: number, 
        private win: number, 
        private o2o: number, 
        private lost: number, 
        private goalIn: number, 
        private goalOut: number, 
        private points: number) {  }

    getTeamName(): string {
        return this.teamName;
    }

    getPlay(): number {
        return this.play;
    }

    getWin(): number {
        return this.win;
    }

    getO2O(): number {
        return this.o2o;
    }

    getLoose(): number {
        return this.lost;
    }

    getGoalIn(): number {
        return this.goalIn;
    }

    getGoalOut(): number {
        return this.goalOut;
    }

    getPoints(): number {
        return this.points;
    }
}

export class Group {
  constructor(private name: string, private rank: Rank[], private matchs: Match[]) {

  }

  getName(): string {
    return this.name;
  }

  getMatchs(): Match[] {
    return this.matchs;
  }

  getRanks(): Rank[] {
      return this.rank;
  }
}

export class Category {
  constructor(private name: string, private group: Group[]) { };

  public getName(): string {
      return this.name;
  }
  public getGroup(): Group[] {
      return this.group;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PlaningService {

  constructor() { }

  getMatchs(): Map<string, Match[]> {
    let currentMatch;
    let matchs: Match[] | undefined;
    let newMatch: Match;

    let allMatchs = new Map<string, Match[]>();

    for(let indexMatch = 0; indexMatch < data.PlanningGeneral.Match.length; indexMatch++) { 
      currentMatch = data.PlanningGeneral.Match[indexMatch];

      newMatch = this.generateMatch(currentMatch);
 
      matchs = allMatchs.get(currentMatch.Terrain)

      if (matchs) {
        matchs.push(newMatch)
      } else {
        allMatchs.set(currentMatch.Terrain, [newMatch]);
      }
    }

    return allMatchs;
  }

  getCategories(): Category[] {
      let categories: Category[] = [];

      data.Categorie.forEach(element => {
          categories.push(new Category(element.Name, this.generateGroups(element.Groupe)))
      });

      return categories;
  }

  private generateMatch(m: any): Match {
    return new Match(
        m.Heure / 100000,
        m.Status == 2, // 1 : not player, 2 : played
        m.CategoryID,
        m.MatchNom, 
        [
          new Team(m.Equipe1, m.Score1),
          new Team(m.Equipe2, m.Score2)
        ]);
  }

  private generateMatchs(m: any): Match[] {
      let matchs: Match[] = [];

      m.forEach((element: any) => matchs.push(this.generateMatch(element)));
      
      return matchs;
  }

  private generateRank(r: any): Rank[] {
    let ranks: Rank[] = [];

    // J: nombre de matchs joués
    // V : nombre de victoires
    // N : nombre de matchs nuls
    // D : nombre de défaites
    // BP : nombre de buts marqués
    // BC : nombre de buts encaissés
    r.forEach((element: any) => ranks.push(
        new Rank(element.Equipe, element.J, element.V, element.N, element.D, element.BC, element.BP, element.Points)
    ));
    
    return ranks;
  }

  private generateGroups(g: any): Group[] {
    let groups: Group[] = [];

    g.forEach((element: any) => groups.push(new Group(element.NomGroupe, this.generateRank(element.Classement.Place), this.generateMatchs(element.Matchs.Match))));

    return groups;
  }
}
