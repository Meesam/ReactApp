var assert = require('assert');
var should=require('should');
var expect = require('expect.js');
var supertest = require("supertest");

var server = supertest.agent("http://localhost:8080/api");

describe("TestGroup unit test",function() {
  it("should add TestGroup in database", function (done) {
    server
      .post("/addtestgroup")
      .send({
        Title:'TestGroup1',
        Version:1,
        Campaign:"TestGroup1_Campaign",
        PublishDate:new Date(),
        CreatedBy:1,
        ModifiedBy:1,
        Status:true
      })
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });

  it("should get all TestGroup from  database", function (done) {
    server
      .post("/alltestgroup")
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });

  it("should update TestGroup in database", function (done) {
    server
      .post("/updatetestgroup")
      .send({
        id:7,
        Title:'TestGroup update',
        Version:1,
        Campaign:"TestGroup1_Campaign",
        PublishDate:new Date(),
        CreatedBy:1,
        ModifiedBy:1,
        Status:true
      })
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });
});


