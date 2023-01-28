
        function saveToLocalStorage(event) {
            event.preventDefault()
            const Ammount = event.target.ammount.value;
            const Description = event.target.description.value;
            const Catagory = event.target.catagory.value;

            const obj = {
                Ammount,
                Description,
                Catagory
            }
            
            localStorage.setItem(obj.Catagory, JSON.stringify(obj))
            onscreen(obj)
        }
        
        function onscreen(obj) {

            const Parent = document.getElementById('lii');

            const child = document.createElement('li');
            child.textContent = obj.Ammount + '-' + obj.Catagory + '-' + obj.Description;


            // delete
            const delbtn = document.createElement('input')
            delbtn.type = "button"
            delbtn.value = 'del expense'
            delbtn.onclick = () => {
                localStorage.removeItem(obj.Catagory)
                Parent.removeChild(child)
            }

            // edit

            const editbtn = document.createElement('input')
            editbtn.type = "button"
            editbtn.value = 'edit expense'
            editbtn.onclick = () => {
                localStorage.removeItem(obj.Catagory)
                Parent.removeChild(child)
                document.getElementById('A').value =obj.Ammount
                document.getElementById('B').value = obj.Description
                document.getElementById('C').value = obj.Catagory
            }
            child.appendChild(editbtn)
            child.appendChild(delbtn)
            Parent.appendChild(child)
        }

    