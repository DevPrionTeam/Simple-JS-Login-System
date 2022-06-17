var arr = document.cookie.split(';'),
                cookies = {};
                for(var i=0; i < arr.length; i++){
                var parts = arr[i].split('=');
                if(parts.length !== 2) continue;
                cookies[parts[0].trim()] = parts[1];
                }
                console.dir(cookies)

                document.getElementById('name').textContent = cookies['usuario'];