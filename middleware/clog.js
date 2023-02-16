const clog = (req, res, next) => {
    const method = req.method;
    switch (method) {
      case 'GET':
        console.log('\x1b[32m%s\x1b[0m', `[${method}] ${req.url}`);
        break;
      case 'POST':
        console.log('\x1b[34m%s\x1b[0m', `[${method}] ${req.url}`);
        break;
      case 'PUT':
        console.log('\x1b[33m%s\x1b[0m', `[${method}] ${req.url}`);
        break;
      case 'DELETE':
        console.log('\x1b[31m%s\x1b[0m', `[${method}] ${req.url}`);
        break;
      default:
        console.log(`[${method}] ${req.url}`);
    }
    next();
  };
  exports.clog = clog;