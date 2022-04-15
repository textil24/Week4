require('http').Server((req, res) => {
  
    res.setHeader('X-Author', 'textil24')
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'x-test, Content-Type, Accept,Access-Control-Allow-Headers')
  
    if (req.url === '/result4/') {
      let body = [];
      let author = 'textil24';
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
  
        return res.end(JSON.stringify({
          'message': author,
          'x-result': req.headers['x-test'],
          'x-body': body,
        }))
      })
    } 
  }).listen(process.env.PORT || 3000);
