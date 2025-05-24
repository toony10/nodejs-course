import * as http from 'http';
import * as fs from 'fs';
import * as url from 'url'
import {replaceTemp,Product} from './modules/replaceTemplet'


const tempOverview = fs.readFileSync(`${__dirname}/6-node-farm/overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/6-node-farm/tamplet-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/6-node-farm/tamplet-product.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/assets/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);
    const {query,pathname}=url.parse(req.url || '', true)

        // Overview Page
        if (pathname === '/') {
            res.writeHead(200, {
                'content-type':'text/html'
            })
            const cardsHtml = dataObj.map((el: Product) => replaceTemp(tempCard, el))
            const outPut = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);
            res.end(outPut);
        }
        // Product Page
        else if (pathname === '/product') {
            res.writeHead(200, {'content-type': 'text/html'})
            const id = query.id;
            if (typeof id === 'string') {
                const product = dataObj[parseInt(id)];
                const outPut = replaceTemp(tempProduct, product);
                res.end(outPut)
            }
        }
            
        // API Page
        else if (pathname === '/api') {
            res.writeHead(200, {
                'content-type':'application/json'
            })
            res.end(data)
        }
            
        // Not Found
        else {
            res.writeHead(404, {
                'Content-type': 'text/html',
                'my-own-header': 'hello-world'
            });
            res.end('<h1>Page not found</h1>');
        }
    })

    server.listen(8000, '127.0.0.1');
