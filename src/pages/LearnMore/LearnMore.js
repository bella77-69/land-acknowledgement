import React, { useState } from "react";
import "./LearnMore.css";

function LearnMore(props) {
  const [isOpen, setIsOpen] = useState(null);

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    if (isOpen === index) {
      // If the clicked question is already open, close it
      setIsOpen(null);
    } else {
      // If a different question is open or no question is open, open the clicked question
      setIsOpen(index);
    }
  };
  const questions = [
    "Understanding Land Acknowledgements",
    "Why is it important?",
    "How do I do a Land Acknowledgement?",
    "What does 'unceded' mean in a Land Acknowledgement?",
  ];

  const answers = [
    "A land acknowledgment is a formal recognition of the ancestral Indigenous territories where an event occurs, honoring the peoples who have stewarded the land for generations. In Canada, land acknowledgments typically include: Recognizing Traditional Owners: Acknowledging the Indigenous nations or communities that once inhabited and may still reside on the land. Treaty Acknowledgment: Mentioning relevant treaties, highlighting their importance and ongoing significance. Culture and History Respect: Showing respect for Indigenous  culture, history, and contributions, emphasizing the value of understanding and honoring their traditions. Commitment to Reconciliation: Many acknowledgments commit to reconciliation, aiming for a more equitable relationship between Indigenous and non-Indigenous communities. Education Opportunity: Land acknowledgments educate audiences about Indigenous history, contributions, and ongoing challenges. These acknowledgments have become common in Canada, especially in education, government events, and cultural gatherings. They promote awareness, respect, and contribute to reconciliation efforts. However, sincerity and meaningful actions to support Indigenous communities are  essential. Land acknowledgments recognize the enduring connection between Indigenous Peoples and their ancestral lands. ",
    " Land acknowledgements are a way to recognize the historical and ongoing connection of Indigenous peoples to the land, as well as to raise awareness about the injustices and challenges they have faced,including the loss of traditional territories and resources. Land acknowledgments are important for several reasons: Honoring Indigenous Presence: They recognize and honor the Indigenous communities with deep historical connections to the  land, shedding light on their often overlooked presence. Respecting Indigenous Culture: Land acknowledgments show respect for Indigenous rights, cultures, and traditions, countering historical erasure and promoting a more inclusive view of the Land's history.",
    " To conduct a meaningful land acknowledgment, follow these essential steps: Begin by researching the Indigenous peoples who have historically and currently inhabit the land in your location, understanding their culture, history, and traditional territories. Craft a concise, respectful statement that acknowledges these Indigenous nations or communities and their deep ties to the land. If relevant, mention any local treaties or agreements. Ensure sincerity, authenticity, and specificity to the location. Practice pronouncing Indigenous names or terms to demonstrate respect. Tailor the acknowledgment to your audience's context and formality. Decide on the appropriate moment in the event or gathering for the acknowledgment, usually near the beginning but potentially at other significant points. If time allows, offer a brief explanation before the acknowledgment, highlighting its significance and educating the audience about its purpose. When delivering the acknowledgment, speak clearly and respectfully. It's acceptable to acknowledge your efforts to learn and respect cultural sensitivities, especially if you're unsure about pronunciation. Follow the acknowledgment with meaningful actions that support Indigenous communities and contribute to reconciliation. This may involve backing Indigenous causes, educating yourself and others, or advocating for policies that respect Indigenous rights. Continuously engage in learning about Indigenous histories, cultures, and contemporary issues while staying informed about ongoing land and resource rights struggles. Be aware that some regions might have specific protocols or guidelines for land acknowledgments. It's crucial to respect these local protocols and seek guidance from local Indigenous communities when appropriate.",
    "In a land acknowledgment, the term 'unceded' refers to land that has not been legally transferred or signed away by Indigenous peoples to colonial or settler governments through treaties or other agreements. When an area is described as 'unceded,' it recognizes that the Indigenous communities that traditionally inhabited that land did not voluntarily cede, sell, or relinquish their rights and title to the land to the colonial or government authorities. In many countries, including Canada, the United States, and Australia, there are numerous instances where Indigenous lands were taken without formal treaties or agreements. The term 'unceded' is used to emphasize the ongoing and unresolved nature of these land disputes, acknowledging that the Indigenous rights to the land remain valid, even if they have not been officially recognized through legal processes. Land acknowledgments are a way to recognize the historical and ongoing connection of Indigenous peoples to the land, as well as to raise awareness about the injustices and challenges they have faced, including the loss of traditional territories and resources. *Ninety-five percent of British Columbia, including Vancouver, is on unceded traditional First Nations territory.",
  ];

  const questionElements = questions.map((question, index) => (
    <div key={index} className="learn-more">
      <h3 onClick={() => toggleAnswer(index)}>{question}</h3>
      {isOpen === index && <p>{answers[index]}</p>}
    </div>
  ));

  return (
    <div className="learn">
      <div className="learn-question">
        {" "}
        <h1 className="page-title">FAQ</h1>
        {questionElements}
        <h2 className="page-title">More ways you can learn.</h2>
        <div className="learn-links">
          
          <a
            href="https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/01/Calls_to_Action_English2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Truth and Reconciliation Commission's Calls to Action
          </a>
          <br />
          <a
            href="https://www.justice.gc.ca/eng/declaration/un_declaration_EN1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            United Nations Declaration on the Rights of Indigenous Peoples
          </a>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
