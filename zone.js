simple usecase:

function main() {
  foo();
  setTimeout(doSomething, 2000);
  bar();
  baz();
}
zone.run(main);

creating new zone:
var myZone = zone.fork();
myZone.run(main);

zone hooks:
onZoneCreated - Runs when zone is forked
beforeTask - Runs before a function called with zone.run is executed
afterTask - Runs after a function in the zone runs
onError - Runs when a function passed to zone.run will throw

var myZoneSpec = {
  beforeTask: function () {
    console.log('Before task');
  },
  afterTask: function () {
    console.log('After task');
  }
};

var myZone = zone.fork(myZoneSpec);
myZone.run(main);
