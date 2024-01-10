// select div element with id app
        const app = document.getElementById('app');
        const header = document.createElement('h1');

        //create new text node for the h1
        const text = 'Develop, Preview, Ship!';
        const headerContent = document.createTextNode(text);

        //Append textnya ke element h1
        header.appendChild(headerContent);
        app.appendChild(header);