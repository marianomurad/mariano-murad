import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import { expList } from "../../app/utils/mockData";
import ClientsCard from "../../app/components/ClientsCard";

const ExperiencePage = () => {
  return (
    <div className="page">
      <Head>
        <title>Experience - Mariano Murad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="flex justify-center text-3xl mt-4">Experience</h1>
        <Accordion defaultIndex={[0]} allowToggle className="mt-4 border md:mx-32">
          {expList.map(({ company, title, startDate, endDate, clients }) => (
            <AccordionItem key={company}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading size="sm">{company}</Heading>
                  </Box>
                  <Box flex="1" textAlign="left">
                    <Heading size="xs">{title}</Heading>
                  </Box>
                  <Heading size="xs" className="mr-2">
                    Date:{" "}
                  </Heading>
                  {startDate} - {endDate}
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={10}>
                {clients?.map(({ name, overview, dailyTasks, stack }) => (
                  <ClientsCard>
                    <Heading fontSize="xl" fontWeight="bold">
                      {name}
                    </Heading>
                    <Text>{overview}</Text>
                    <Text>{dailyTasks}</Text>
                    <div className="mt-2">
                      <Heading size="sm">Stack</Heading>
                      {stack?.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </div>
                  </ClientsCard>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
};

export default ExperiencePage;
