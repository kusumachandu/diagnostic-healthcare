import React from "react";
import { useRouter } from "next/router";
import Profile from "@/components/widgets/Profile";
import Navbar from "@/components/layouts/Navbar";
import config from "@/config/next-seo.config";
import { NextSeo } from "next-seo";

export default function BlogViewPage() {
  
  const router = useRouter();
  const { id } = router.query;

  const blogs = [
    {
      title: "attention Deficit",
      image:
        "https://www.acamh.org/app/uploads/2019/12/Age-related-immaturity-web.png",
      what: "What is attention-deficit in adults ?",
      briefdesc:
        "Attention-deficit/hyperactivity disorder (ADHD) is a neuropsychiatric condition that makes it difficult to pay attention, control impulsivity (taking action before fully thinking things through) or manage excitable behavior (the person is squirming/fidgeting or “hyperactive”). The disorder interferes with the quality of life by intruding on day-to-day functioning. The American Psychiatric Association has identified three different types of ADHD. Adults with significant problems with inattention — but who exhibit few or no symptoms of hyperactivity — are said to have the predominantly inattentive presentation of ADHD. People with this type of ADHD have trouble paying attention to details, are easily distracted, often have trouble organizing or finishing tasks and often forget routine chores (such as paying bills on time or returning phone calls).",
      question: "How is attention-deficit diagnosed ?",
      precaution: "There is no single medical or genetic test for the predominantly inattentive type of ADHD. Diagnosis of ADHD requires a careful review of symptoms. A qualified mental health professional, often a physician (psychiatrist or neurologist) or clinical psychologist, evaluates you. The evaluation consists of these three steps: Confirm the presence of symptoms. Confirm that the symptoms aren't due to another mental health or environmental condition (such as increased work demand or significantly heightened stress in a person’s life). Determine the presence of co-existing mental health disorders, such as depression, anxiety or bipolar disorder. Your healthcare provider: Will ask you for a detailed history about your past and current behavior patterns. The interview will include questions about how you function at work, home and in social settings. Family members or close friends may also be interviewed to verify and provide additional information. The presence of symptoms is not enough. Symptoms must be present since 12 years of age, must be present in more than one setting, and must interfere with your daily life. Will ask you about your family’s medical history and you may be required to undergo a physical examination to rule out medical conditions that can cause symptoms resembling those of ADHD (such as sleep disorders, learning disability, alcohol/drug use problems). Will ask you to complete a rating scale checklist of symptoms. The psychologist or doctor might use other standardized behavior rating scales. May ask you to take other types of psychological or medical tests to determine the presence of co-existing conditions, such as anxiety or depression.",
      id: 1,
    },
    {
      title: "post-traumatic stress",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stress-1558362827.jpg",
      what: "What is post-traumatic stress disorder?",
      briefdesc:
        "Post-traumatic stress disorder (PTSD) is a mental health issue that can develop after a distressing event. The event may be dangerous, life-threatening, shocking or very scary. It’s normal to feel upset after something like that happening. You may have trouble sleeping, eating or doing things you enjoy for a little while. But with PTSD, symptoms last longer than a few months and interfere with your life.",
      question: "How is PTSD diagnosed?",
      precaution: "There’s no scan or blood test for PTSD. If you’ve experienced a traumatic event and are having symptoms of PTSD, talk to a healthcare provider.The healthcare provider can make the diagnosis based on a conversation about your symptoms. To be considered PTSD, symptoms must last more than a month and interfere with your life.",
      id: 2,
    },
    {
      title: "Sleep Dis-order",
      image:
        "https://www.practostatic.com/health-wiki/images/3e2b1402cf0513d37599504ae8fe33d7.jpg",
      what: "What are sleep disorders?",
      briefdesc:
        "Sleep disorders are conditions that impair your sleep or prevent you from getting restful sleep and, as a result, can cause daytime sleepiness and other symptoms. Everyone can experience problems with sleep from time to time. However, you might have a sleep disorder if: You regularly experience difficulty sleeping. You are often tired during the day even though you slept for at least seven hours the night before. You have a reduced or impaired ability to perform regular daytime activities. There are more than 100 million Americans of all ages who are not getting an adequate amount of sleep. Sleep is very important. Not getting enough sleep can have untoward consequences on school and work performance, interpersonal relationships, health and safety.",
      question: "How are sleep disorders diagnosed?",
      precaution: "If you suspect that you may have a sleep disorder, discuss your symptoms with your healthcare provider. He or she can perform a physical exam and help you identify the difficulties you are having with sleep. Keeping a sleep diary for two weeks may be helpful to your healthcare provider. Some illnesses can cause disturbed sleep, so your healthcare provider may order tests to rule out other conditions. If your healthcare provider suspects that you have a sleep disorder, he or she may refer you to a sleep disorder clinic. A sleep specialist will review your symptoms and may suggest that you undergo a sleep study. A sleep study or polysomnogram (PSG) is a test that electronically transmits and records specific physical activities while you sleep. A sleep study can be done at home (home sleep apnea testing) for select patients. The recordings become data that is analyzed by a qualified healthcare provider to determine whether or not you have a sleep disorder. In order to determine if you have a sleep disorder, it is important to pay attention to your sleep habits by keeping a sleep diary and discussing patterns and characteristics of your sleep with your healthcare provider. Many common sleep problems can be treated with behavioral treatments and an increased attention to proper sleep hygiene. Consult your healthcare provider if you have any concerns about your sleep patterns.",
      id: 3,
    },
    {
      title: "substance use disorder",
      image:
        "https://www.aimsindia.com/wp-content/uploads/2020/10/Asian-blog-image2-01-Oct.jpg",
      what: "What is substance use disorder ?",
      briefdesc:
        "Substance use disorder can be mild, moderate or severe. Addiction is the most severe form of SUD. It involves continued substance use despite negative consequences. Addiction to substances happens when the reward system in your brain “takes over” and amplifies compulsive substance-seeking. Both involve the development of physical dependence and psychological dependence. People are psychologically dependent when a drug is so central to their thoughts, emotions and activities that the need to continue its use becomes a craving or compulsion despite negative consequences. With physical dependence, your body has adapted to the presence of the substance, and withdrawal symptoms happen if you suddenly stop taking the drug or you take a reduced dosage.",
      question: "How is substance use disorder diagnosed?",
      precaution: "A single test can’t diagnose substance use disorder. Instead, healthcare providers rely on a thorough evaluation of your medical history and behaviors surrounding substance use. They may order drug tests and evaluate prescription drug monitoring program reports. A provider will also ask about your mental health history, as it’s common to have an SUD and a mental health condition. According to the American Psychiatric Association’s Diagnostic and Statistical Manual of Mental Disorders (DSM-5), a person must have at least two signs in the symptoms section over 12 months to be diagnosed with substance use disorder. It’s important to remember that SUD exists on a spectrum of severity: Two to three signs indicate a mild substance use disorder. Four or five signs indicate a moderate substance use disorder. Six or more symptoms indicate a severe substance use disorder.",
      id: 4,
    },
    {
      title: "Personality Dis-order",
      image:
        "https://images.squarespace-cdn.com/content/v1/60bf898a38e65d4d4ab9babe/1623275762977-LSZJ5D9OWBRNHGMTVJM7/overthinking.jpg",
      what: "What is a personality disorder ?",
      briefdesc:
        "A personality disorder is a mental health condition that involves long-lasting, all-encompassing, disruptive patterns of thinking, behavior, mood and relating to others. These patterns cause a person significant distress and/or impair their ability to function. There are 10 types of personality disorders, each with different characteristics and symptoms. Personality is vital to defining who we are as individuals. It involves a unique blend of traits — including attitudes, thoughts and behaviors — as well as how we express these traits in our interactions with others and with the world around us. Personality disorders may cause distorted perceptions of reality, abnormal behaviors and distress across various aspects of life, including work, relationships and social functioning. Additionally, people with a personality disorder may not recognize their troubling behaviors or the negative effect they have on others.",
      question: "How are personality disorders diagnosed?",
      precaution: "Personality disorders can be difficult to diagnose since most people with a personality disorder don’t think there’s a problem with their behavior or way of thinking. Because of this, people with a personality disorder typically don’t seek help or a diagnosis for their condition. Instead, their loved ones or a social agency may refer them to a mental health professional because their behavior causes difficulty for others. When they do seek help, it’s often due to conditions such as anxiety, depression or substance use, or because of the problems created by their personality disorder, such as divorce or unemployment, not the disorder itself. Healthcare providers base the diagnosis of a specific personality disorder on criteria provided in the American Psychiatric Association’s Diagnostic and Statistical Manual of Mental Disorders. When a mental health professional, like a psychologist or psychiatrist, suspects someone might have a personality disorder, they often ask broad, general questions that won’t create a defensive response or hostile environment.",
      id: 5,
    },
    {
      title: "Eating Dis-order",
      image:
        "http://4.bp.blogspot.com/-J3M_8qpW8iE/VTqDHHbvTBI/AAAAAAAAARA/igcdwwoLISU/s1600/binge.jpg",
      what: "What is an eating disorder?",
      briefdesc:
        "An eating disorder is a serious, complex, mental health issue that one’s affects emotional and physical health. People with eating disorders develop an unhealthy relationships with food, their weight or appearance. Anorexia, bulimia and binge eating disorder are all types of eating disorders. Eating disorders are treatable. People with untreated eating disorders may develop life-threatening problems.",
      question: "How is an eating disorder diagnosed?",
      precaution: "Healthcare providers, such as physicians and mental health professionals, diagnose eating disorders. Your primary care provider may review symptoms, perform a physical examination and order blood tests. A mental health counselor, such as a psychologist or psychiatrist, conducts a psychological evaluation to learn more about your eating behaviors and beliefs. Providers use the American Psychiatric Association’s Diagnostic and Statistical Manual of Mental Disorders (DSM) to make a diagnosis. The DSM outlines symptoms for each type of eating disorder. You don’t have to have every symptom to receive an eating disorder diagnosis. And even if you don’t have a specific DSM-listed eating disorder, you may still need help overcoming food-related issues.",
      id: 6,
    },
  ];

  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const SEO = {
    ...config,
    title: 'Blog',
    description: blog.title,
  }

  return (
    <>
    <NextSeo {...SEO} />
    <div className="md:px-24 lg:px-32 lg:pb-10">
      <Navbar />
      <div className="lg:grid lg:grid-cols-2 px-10">
        <div className=" text-center flex justify-center items-center">
          <div className="">
            <h1 className="uppercase  font-bold text-lg md:text-4xl lg:text-4xl mb-2">{blog.title}</h1>
            <p className="font-semibold text-gray-600 line px-12 md:px-20 lg:px-20 leading-[20px]">Have a brief idea about the dis-order in this page which helps to know better about your's problem</p>
            <div className="mt-10 mb-10 w-[300px] m-auto md:w-[300px] md:m-auto lg:px-0 md:mt-5 md:mb-5 lg:mt-10">
                <Profile />
            </div>
          </div>
        </div>
        <div className="py-5">
          <img
            className="w-[300px] h-[200px] m-auto md:w-[400px] md:h-[300px] md:m-auto lg:w-[400px] lg:h-[300px] lg:ml-24 rounded-2xl"
            src={blog.image}
            alt="image"
          />
        </div>
      </div>
      <div className="lg:px-10 md:px-10 px-3 py-10 shadow-md mb-10 dark:shadow-white">
        <p className="font-semibold text-gray-600 text-lg mb-2 dark:text-white">{blog.what}</p>
        <p className="dark:text-gray-400">{blog.briefdesc}</p>
      </div>
      <div className="md:px-10 lg:px-10 px-3 py-10 shadow-md rounded-lg dark:shadow-white">
        <p className="font-semibold text-gray-600 text-lg mb-2 dark:text-white">{blog.question}</p>
        <p className="dark:text-gray-400">{blog.precaution}</p>
      </div>
    </div>
    </>
  );
}
