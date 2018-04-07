var socket = io("localhost:3000");
var mes_obj = [];

var Block = React.createClass({
  getInitialState: function() {
    socket.on("news", function(data) {
      socket.emit("my other event", { my: "апрапрапр" });
    });
    
    return { checked: true };
  },
  axios: function(url) {},
  mySocket: function() {
    var obj = {};
  
    ReactDOM.render(<Block_4 />, root);
    socket.emit("new_email", { dat: "obj" });
  },
  list: {
    status: "",
    timeridName: "",

    load: false,
    twitt: []
  },
  render: function() {
    return (
      <div id="form_1">
        {mes_obj}
      </div>
    );
  }
});
var Block_2 = React.createClass({
  getInitialState: function() {
    socket.on("news_mes", function(data) {
      console.log(data)
      mes_obj.push(data) 
      ReactDOM.render(<Block />, root);
    });

    return { checked: true };
  },
  shipped: function() {
    socket.emit("shipped",{"front":"ok"});
  },
  incoming: function() {;
    socket.emit("incoming");
  },
  new_message: function() {
    ReactDOM.render(<Block />, root);
  },
  render: function() {
    return (
      <div className="lef-blok">
        <div className="container-fluid ot_my">
          <button onClick={this.shipped} className="btn-2">
            отправленые
          </button>
        </div>
      </div>
    );
  }
});
var Block_3 = React.createClass({
  getInitialState: function() {
    return { checked: true };
  },
  mySocket: function() {},

  render: function() {
    return (
      <section className="list-wrap">
        <label forName="search-text">Search the list</label>
        <span className="list-count" />
        <ul idName="list">
          {mes_obj.map(function(el) {
            return (
              <li className="in" key={el.id}>
                <div>{el.to}</div>
                <div>{el.subject}</div>
                <div>{el.html}</div>
              </li>
            );
          })}
          {/* <span>{this.list.status}</span> */}
        </ul>
      </section>
    );
  }
});
var Block_4 = React.createClass({
  getInitialState: function() {
    return { checked: true };
  },
  mySocket: function() {},

  render: function() {
    return (
      <div className="loading-bro">
        <h1>отправка</h1>
        <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
          <circle id="loading-inner" cx="75" cy="75" r="60" />
        </svg>
      </div>
    );
  }
});
var root = document.getElementById("root");
var root_2 = document.getElementById("root_2");
//ReactDOM.render(<Block_2 />, root_2);
 ReactDOM.render(<Block_2 />, root_2);
