const taskContainersList = document.querySelectorAll(".task-list-accordion");
taskContainersList.forEach((accordion)=> {

    const accordionHeader = accordion.querySelector(".accordion-header");
    
    accordionHeader.addEventListener("click", (event)=> {

        const accordionBody = accordion.querySelector(".task-list-content-container");
        const arrow = accordionHeader.querySelector(".accordion-arrow");

        if (accordionBody.classList.contains("closed-accordion")) {            
            accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`;            
        }
        else {
            accordionBody.style.maxHeight = 'null';
        }
        accordionBody.classList.toggle("closed-accordion");
        arrow.classList.toggle("arrow-up");

    })
})

// by default open the todo accordion
const todoAccordion = taskContainersList[0];
const todoAccordionBody = todoAccordion.querySelector(".task-list-content-container");
todoAccordionBody.style.maxHeight = `${todoAccordionBody.scrollHeight}px`;
todoAccordionBody.classList.remove("closed-accordion");