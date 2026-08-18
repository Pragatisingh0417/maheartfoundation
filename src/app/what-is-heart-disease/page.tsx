"use client";

import PageWithSidebar from "../components/PageWithSidebar";
import T from "../components/Translate";

export default function WhatIsHeartDiseasePage() {
  return (
    <main className="w-full">

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <T>What Is Heart Disease?</T>
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
          <T>Understanding the causes, types, symptoms, and treatments of heart disease.</T>
        </p>
      </section>
      <PageWithSidebar>
        {/* ============================
            CONTENT SECTION
        ============================= */}
        <section className="max-w-5xl mx-auto px-6 py-16">

          {/* INTRO */}
          <article className="space-y-6 text-lg leading-relaxed text-gray-700">

            <p>
              <T>Heart disease is a term covering any disorder of the heart. Unlike cardiovascular disease, which describes problems with the blood vessels and circulatory system as well as the heart, heart disease refers specifically to issues and deformities in the heart itself.</T>
            </p>

            <p>
              <T>According to the Centers for Disease Control (CDC), heart disease is the leading cause of death in the United Kingdom, United States, Canada, and Australia. One in every four deaths in the U.S occurs as a result of heart disease.</T>
            </p>

            {/* FAST FACTS */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10"><T>Fast Facts</T></h2>

            <ul className="list-disc pl-6 space-y-2">
              <li><T>One in every four deaths in the U.S. is related to heart disease.</T></li>
              <li><T>Coronary heart disease, arrhythmia, and myocardial infarction are common examples.</T></li>
              <li><T>Heart disease can be treated with medications or surgical procedures.</T></li>
              <li><T>Stopping smoking and regular exercise can greatly reduce risk.</T></li>
            </ul>

            {/* TYPES */}
            <h2 className="text-3xl font-extrabold text-red-600 mt-16"><T>Types of Heart Disease</T></h2>

            <p>
              <T>There are many different types of heart disease that affect the heart in different ways. These include:</T>
            </p>

            <div className="space-y-8 mt-6">

              {/* 1. CONGENITAL */}
              <div>
                <h3 className="text-[18px] font-bold"><T>Congenital Heart Disease</T></h3>
                <p className="mt-2">
                  <T>A general term for deformities present from birth, including:</T>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><T>Septal defects — holes between heart chambers.</T></li>
                  <li><T>Obstruction defects — blocked blood flow within the heart.</T></li>
                  <li><T>Cyanotic heart disease — causes low oxygen supply in the body.</T></li>
                </ul>
              </div>

              {/* 2. ARRHYTHMIA */}
              <div>
                <h3 className="text-[18px] font-bold "><T>Arrhythmia</T></h3>
                <p className="mt-2">
                  <T>An irregular heartbeat caused by malfunctioning electrical impulses in the heart.</T>
                </p>
                <p className="mt-2"><T>Types include:</T></p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><T>Tachycardia — heart beats too fast.</T></li>
                  <li><T>Bradycardia — heart beats too slowly.</T></li>
                  <li><T>Premature ventricular contractions — abnormal extra beats.</T></li>
                  <li><T>Fibrillation — irregular and chaotic heartbeat.</T></li>
                </ul>
              </div>

              {/* 3. CORONARY ARTERY DISEASE */}
              <div>
                <h3 className="text-[18px] font-bold"><T>Coronary Artery Disease</T></h3>
                <p className="mt-2">
                  <T>Caused by plaque buildup that narrows coronary arteries, reducing oxygen supply to the heart.</T>
                </p>
              </div>

              {/* 4. DILATED CARDIOMYOPATHY */}
              <div>
                <h3 className="text-[18px] font-bold"><T>Dilated Cardiomyopathy</T></h3>
                <p className="mt-2">
                  <T>Heart chambers become enlarged and weakened, often due to long-term oxygen deficiency.</T>
                </p>
              </div>

              {/* 5. HEART ATTACK */}
              <div>
                <h3 className="text-[18px] font-bold"><T>Myocardial Infarction (Heart Attack)</T></h3>
                <p className="mt-2">
                  <T>Occurs when blood flow to the heart is blocked, damaging heart tissue.</T>
                </p>
              </div>

              {/* 6. HEART FAILURE */}
              <div>
                <h3 className="text-[18px] font-bold"><T>Heart Failure</T></h3>
                <p className="mt-2">
                  <T>The heart becomes too weak or stiff to pump blood effectively.</T>
                </p>
              </div>

              {/* 7. OTHER TYPES */}
              <div>
                <h3 className="text-2xl font-bold "><T>Other Types</T></h3>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><T>Hypertrophic cardiomyopathy</T></li>
                  <li><T>Mitral regurgitation</T></li>
                  <li><T>Mitral valve prolapse</T></li>
                  <li><T>Pulmonary stenosis</T></li>
                </ul>
              </div>
            </div>

            {/* SYMPTOMS */}
            <h2 className="text-3xl font-extrabold text-red-600 mt-16"><T>Symptoms</T></h2>
            <p className="mt-2">
              <T>Symptoms vary depending on the heart condition, but common signs include:</T>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><T>Chest pain (angina)</T></li>
              <li><T>Shortness of breath</T></li>
              <li><T>Heart palpitations</T></li>
              <li><T>Pain spreading to the arms, neck, jaw, or back</T></li>
              <li><T>Nausea or vomiting</T></li>
              <li><T>Dizziness or sweating</T></li>
            </ul>

            {/* CAUSES */}
            <h2 className="text-[24px] font-extrabold text-red-600 mt-10"><T>Causes</T></h2>
            <p className="mt-2">
              <T>Heart disease can be caused by damage to the heart, poor blood supply, lifestyle habits, or genetic factors.</T>
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><T>High blood pressure & cholesterol</T></li>
              <li><T>Smoking</T></li>
              <li><T>Obesity</T></li>
              <li><T>Diabetes</T></li>
              <li><T>Family history</T></li>
              <li><T>Poor diet</T></li>
              <li><T>Age</T></li>
              <li><T>Lack of physical activity</T></li>
            </ul>

            {/* TREATMENT */}
            <h2 className="text-[24px] font-extrabold text-red-600 mt-10"><T>Treatment</T></h2>

            <h3 className="text-xl font-semibold mt-3"><T>Medication</T></h3>
            <p className="mt-2"><T>Common medicines include:</T></p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><T>Statins</T></li>
              <li><T>Aspirin or blood thinners</T></li>
              <li><T>Beta-blockers</T></li>
              <li><T>ACE inhibitors</T></li>
            </ul>

            <h3 className="text-[24px] font-semibold mt-6"><T>Surgery</T></h3>
            <p className="mt-2">
              <T>Surgical procedures may include angioplasty, bypass surgery, valve repair, pacemakers, or heart transplants.</T>
            </p>

            {/* PREVENTION */}
            <h2 className="text-[24px] font-extrabold text-red-600 mt-16"><T>Prevention</T></h2>

            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><T>Eat a balanced, low-fat, high-fiber diet.</T></li>
              <li><T>Exercise regularly.</T></li>
              <li><T>Maintain a healthy weight.</T></li>
              <li><T>Quit smoking.</T></li>
              <li><T>Limit alcohol consumption.</T></li>
              <li><T>Control diabetes and blood pressure.</T></li>
            </ul>

          </article>
        </section>
      </PageWithSidebar>
    </main>
  );
}

