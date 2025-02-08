import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
const FrequentAskedQuestion = () => {
  const faq = [
    {
      question:
        "Is it possible for small business to get company registration in kolkata?",
      answer: "Answer will be displayed soon.",
    },
    {
      question: "Who can be a director in a private limited company?",
      answer: "Answer will be displayed soon",
    },
    {
      question:
        "Can a proprietorship firm be converted into a private limited company?",
      answer: "Answer will be displayed soon",
    },
    {
      question:
        "What is the minimum capital required to start a private limited company in Kolkata?",
      answer: "Answere will be displayed soon",
    },
    {
      question: "How to register a Private limited company in Kolkata?",
      answer: "Answer will be displayed soon",
    },
    {
      question:
        "Can a private limited company be registered in Kolkata if I do not stay in Kolkata?",
      answer: "Answer will be displayed soon.",
    },
    {
      question:
        "Can i register a private limited company at my home or residential address in Kolkata, or is a commercial address required?",
      answer: "Answer will be displayed soon.",
    },
  ];
  return (
    <section>
      <div>
        <h3>Frequent Ask Questions</h3>
        <MDBAccordion flush>
          {faq.map((accordianQA, index) => (
            <MDBAccordionItem
              collapseId={index}
              headerTitle={`${index + 1} - ${accordianQA.question}`}
            >
              <b>{accordianQA.answer}</b>
            </MDBAccordionItem>
          ))}
        </MDBAccordion>
      </div>
    </section>
  );
};

export default FrequentAskedQuestion;
