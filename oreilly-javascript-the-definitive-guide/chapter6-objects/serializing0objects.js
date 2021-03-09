

o = {x:1, y:{z:[false,null,""]}}; // Define a test object
s = JSON.stringify(o); // s is '{"x":1,"y":{"z":[false,null,""]}}'
p = JSON.parse(s); // p is a deep copy of o