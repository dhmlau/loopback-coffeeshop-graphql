## loopback-coffeeshop-graphql
A [LoopBack](loopback.io) 3 example to show how to use  [loopback-graphql-server](https://github.com/yahoohung/loopback-graphql-server) to expose GraphQL APIs.

----

### Step 1: Create your regular LoopBack application
Install `loopback-cli` to scaffold your LoopBack application and create model. 

### Step 2: Initialize data 
In this example, we are using the in-memory database.  So we've added some code to initialize the dataset through the boot script `\server\boot\init-data.js`.

### Step 3: Install loopback-graphql-server
Run `npm i -S loopback-graphql-server`

### Step 4: Edit component-config.json
Follow the instruction [here](https://github.com/yahoohung/loopback-graphql-server), i.e. add the following to `component-config.json`:
```
"loopback-graphql-server": {
    "path": "/graphql",
    "graphiqlPath": "/graphiql",
    "subscriptionServer": {
      "disable": true,
      "port": 5000,
      "options": {},
      "socketOptions": {}
    },
    "modelMutationGroups": false,
    "modelQueryGroups": true
  }
  ```

  ### Step 5: Run it
  The LoopBack API explorer is still available: http://localhost:3000/explorer.  

  The GraphQL interface can be accessed here: http://localhost:3000/graphiql

  A sample query: 
  ```
  {CoffeeShop {
CoffeeShopFind {
  edges {
    node {
      city
      capacity
    }
  }
}
}}
```

The output:
```
{
  "data": {
    "CoffeeShop": {
      "CoffeeShopFind": {
        "edges": [
          {
            "node": {
              "city": "Toronto",
              "capacity": 20
            }
          },
          {
            "node": {
              "city": "Markham",
              "capacity": 30
            }
          },
          {
            "node": {
              "city": "Richmond Hill",
              "capacity": 30
            }
          }
        ]
      }
    }
  }
}
```