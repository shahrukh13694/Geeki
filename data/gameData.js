// Holds game data.
// This array contains a list of all the domains in the game.
window.gameDomains = ["Medical", "Computers and Electrical", "Mechanical"];  // These are the domains for the game.

// This array contains a list of all the levels in the game
window.gameLevels = ["Basic", "Intermediate", "Advanced"]; // These are the game levels.

// Creating main data for the game with details for each domain and level.
/* template is :
window.mainData = {
  "domain" : {
    "level" : [
      {
      properties...
      }
    ]
  }
}
Can be accessed as temp = window.mainData[domain][level]; temp[i].property;
*/
window.mainData = {
   "Medical": {
      "Basic":[
         {
            "tool_id": "med-b-1",
            "tool_name":"Weighing Scale",
            "tool_imgsource":"images/medical/basic/weighing_scale.png",
            "tool_description":"A weighing scale (or weighing balance) is a device to measure weight or mass. These are also known as mass scales, weight scales, mass balance, weight balance, or simply scale, balance, or balance scale.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Weighing_scale"
         },
         {
            "tool_id": "med-b-2",
            "tool_name":"Thermometer",
            "tool_imgsource":"images/medical/basic/thermometer.png",
            "tool_description":"A thermometer is a device that measures temperature or a temperature gradient. A thermometer has two important elements: (1) a temperature sensor (e.g. the bulb of a mercury-in-glass thermometer or the pyrometric sensor in an infrared thermometer) in which some change occurs with a change in temperature; and (2) some means of converting this change into a numerical value (e.g. the visible scale that is marked on a mercury-in-glass thermometer or the digita readout on an infrared model)",
            "tool_description_source":"https://en.wikipedia.org/wiki/Thermometer"
         },
         {
            "tool_id": "med-b-3",
            "tool_name":"Dropper",
            "tool_imgsource":"images/medical/basic/pipette_dropper.png",
            "tool_description":"A dropper or Pasteur pipette is an instrument used to transfer small quantities of liquid. They are usually glass tubes tapered to a narrow point, and fitted with a rubber bulb at the top. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Pasteur_pipette"
         },
         {
            "tool_id": "med-b-4",
            "tool_name":"Walker",
            "tool_imgsource":"images/medical/basic/walker.png",
            "tool_description":"A walker or walking frame is a tool for disabled or elderly people who need additional support to maintain balance or stability while walking. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Walker_(mobility)"
         },
         {
            "tool_id": "med-b-5",
            "tool_name":"Syringe",
            "tool_imgsource":"images/medical/basic/syringe.png",
            "tool_description":"A syringe is a simple reciprocating pump consisting of a plunger that fits tightly within a cylindrical tube called a barrel. The plunger can be linearly pulled and pushed along the inside of the tube, allowing the syringe to take in and expel liquid or gas through a discharge orifice at the front (open) end of the tube.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Syringe"
         },
         {
            "tool_id": "med-b-6",
            "tool_name":"Gas Cylinder",
            "tool_imgsource":"images/medical/basic/gas-cylinder.png",
            "tool_description":"A gas cylinder or tank is a pressure vessel for storage and containment of gases at above atmospheric pressure. High-pressure gas cylinders are also called bottles. Inside the cylinder the stored contents may be in a state of compressed gas, vapor over liquid, supercritical fluid, or dissolved in a substrate material, depending on the physical characteristics of the contents. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Gas_cylinder"
         },
         {
            "tool_id": "med-b-7",
            "tool_name":"Wheelchair",
            "tool_imgsource":"images/medical/basic/wheel-chair.png",
            "tool_description":"A wheelchair is a chair with wheels, used when walking is difficult or impossible due to illness, injury, or disability. Wheelchairs come in a wide variety of formats to meet the specific needs of their users. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Wheelchair"
         },
         {
            "tool_id": "med-b-8",
            "tool_name":"Crutch",
            "tool_imgsource":"images/medical/basic/crutch.png",
            "tool_description":"A crutch is a mobility aid that transfers weight from the legs to the upper body. It is often used by people who cannot use their legs to support their weight, for reasons ranging from short-term injuries to lifelong disabilities.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Crutch"
         },
         {
            "tool_id": "med-b-9",
            "tool_name":"Inhaler",
            "tool_imgsource":"images/medical/basic/inhaler.png",
            "tool_description":"An inhaler (puffer or pump) is a medical device used for delivering medication into the body via the lungs. It is mainly used in the treatment of asthma and chronic obstructive pulmonary disease. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Inhaler"
         },
         {
            "tool_id": "med-b-10",
            "tool_name":"Capsules",
            "tool_imgsource":"images/medical/basic/capsules.png",
            "tool_description":"In the manufacture of pharmaceuticals, encapsulation refers to a range of dosage forms—techniques used to enclose medicines—in a relatively stable shell known as a capsule, allowing them to, for example, be taken orally or be used as suppositories. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Capsule_(pharmacy)"
         },
         {
            "tool_id": "med-b-11",
            "tool_name":"Tablets",
            "tool_imgsource":"images/medical/basic/tablets.png",
            "tool_description":"A tablet is a pharmaceutical dosage form. Tablets may be defined as the solid unit dosage form of medicament or medicaments with or without suitable excipients and prepared either by molding or by compression.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Tablet_(pharmacy)"
         },
         {
            "tool_id": "med-b-12",
            "tool_name":"Band-Aid",
            "tool_imgsource":"images/medical/basic/band-aid.png",
            "tool_description":"Band-Aid is a brand of adhesive bandages distributed by the American pharmaceutical and medical-devices company Johnson & Johnson. Invented in 1920, the brand has become a generic term for adhesive bandages in the United States and Australia.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Band-Aid"
         },
         {
            "tool_id": "med-b-13",
            "tool_name":"First Aid Kit",
            "tool_imgsource":"images/medical/basic/first-aid-kit.png",
            "tool_description":"A first aid kit is a collection of supplies and equipment that is used to give medical treatment. There is a wide variation in the contents of first aid kits based on the knowledge and experience of those putting it together, the differing first aid requirements of the area where it may be used and variations in legislation or regulation in a given area.",
            "tool_description_source":"https://en.wikipedia.org/wiki/First_aid_kit"
         },
         {
            "tool_id": "med-b-14",
            "tool_name":"Surgical Scissors",
            "tool_imgsource":"images/medical/basic/surgical-scissors.png",
            "tool_description":"Surgical scissors are surgical instruments usually used for cutting. They include bandage scissors, dissecting scissors, iris scissors, operating scissors, stitch scissors, tenotomy scissors, Metzenbaum scissors, plastic surgery scissors, and Mayo scissors. Surgical scissors are usually made of very hard stainless steel for ongoing toughness.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Surgical_scissors"
         },
         {
            "tool_id": "med-b-15",
            "tool_name":"Gloves",
            "tool_imgsource":"images/medical/basic/gloves.png",
            "tool_description":"A glove is a garment covering the whole hand. Gloves usually have separate sheaths or openings for each finger and the thumb.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Glove"
         },
         {
            "tool_id": "med-b-16",
            "tool_name":"Oxygen Mask",
            "tool_imgsource":"images/medical/basic/oxygen-mask.png",
            "tool_description":"An oxygen mask provides a method to transfer breathing oxygen gas from a storage tank to the lungs. Oxygen masks may cover only the nose and mouth (oral nasal mask) or the entire face (full-face mask). They may be made of plastic, silicone, or rubber.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Oxygen_mask"
         },
         {
            "tool_id": "med-b-17",
            "tool_name":"Test tube",
            "tool_imgsource":"images/medical/basic/test-tube.png",
            "tool_description":"A test tube, also known as a culture tube or sample tube, is a common piece of laboratory glassware consisting of a finger-like length of glass or clear plastic tubing, open at the top and closed at the bottom. Test tubes are usually placed in special-purpose racks.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Test_tube"
         }
      ],
      "Intermediate": [
         {
            "tool_id": "med-i-1",
            "tool_name":"stethoscope",
            "tool_imgsource":"images/medical/intermediate/stethoscope.png",
            "tool_description":"The stethoscope is an acoustic medical device for auscultation, or listening to the internal sounds of an animal or human body. It typically has a small disc-shaped resonator that is placed against the chest, and two tubes connected to earpieces. It is often used to listen to lung and heart sounds.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Stethoscope"
         },
         {
            "tool_id": "med-i-2",
            "tool_name":"Reflex Hammer",
            "tool_imgsource":"images/medical/intermediate/reflexhammer.png",
            "tool_description":"A reflex hammer is a medical instrument used by practitioners to test deep tendon reflexes. Testing for reflexes is an important part of the neurological physical examination in order to detect abnormalities in the central or peripheral nervous system.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Reflex_hammer"
         },
         {
            "tool_id": "med-i-3",
            "tool_name":"Catheter",
            "tool_imgsource":"images/medical/intermediate/catheter.png",
            "tool_description":"In medicine, a catheter is a thin tube made from medical grade materials serving a broad range of functions. Catheters are medical devices that can be inserted in the body to treat diseases or perform a surgical procedure. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Catheter"
         },
         {
            "tool_id": "med-i-4",
            "tool_name":"Centrifuge",
            "tool_imgsource":"images/medical/intermediate/centrifuge.png",
            "tool_description":"A centrifuge is a piece of equipment that puts an object in rotation around a fixed axis (spins it in a circle), applying a force perpendicular to the axis of spin (outward) that can be very strong. The centrifuge works using the sedimentation principle, where the centrifugal acceleration causes denser substances and particles to move outward in the radial direction.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Centrifuge"
         },
         {
            "tool_id": "med-i-5",
            "tool_name":"Scalpel",
            "tool_imgsource":"images/medical/intermediate/scalpel.png",
            "tool_description":"A scalpel, or lancet, is a small and extremely sharp bladed instrument used for surgery, anatomical dissection, podiatry and various arts and crafts. Scalpels may be single-use disposable or re-usable. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Scalpel"
         },
         {
            "tool_id": "med-i-6",
            "tool_name":"Hearing Aid",
            "tool_imgsource":"images/medical/intermediate/hearing-aid.png",
            "tool_description":"A hearing aid is a device designed to improve hearing by making sound audible to a person with hearing loss. Hearing aids are classified as medical devices in most countries, and regulated by the respective regulations. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Hearing_aid"
         },
         {
            "tool_id": "med-i-7",
            "tool_name":"Pulse Oximeter",
            "tool_imgsource":"images/medical/intermediate/oximeter.png",
            "tool_description":"Pulse oximetry is a noninvasive method for monitoring a person's oxygen saturation (SO2). Though its reading of peripheral oxygen saturation (SpO2) is not always identical to the more desirable reading of arterial oxygen saturation (SaO2) from arterial blood gas analysis, the two are correlated well enough that the safe, convenient, noninvasive, inexpensive pulse oximetry method is valuable for measuring oxygen saturation in clinical use.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Pulse_oximetry"
         },
         {
            "tool_id": "med-i-8",
            "tool_name":"Microscope",
            "tool_imgsource":"images/medical/intermediate/microscope.png",
            "tool_description":"A microscope is an instrument used to see objects that are too small to be seen by the naked eye. The most common microscope (and the first to be invented) is the optical microscope, which uses light to pass through a sample to produce an image. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Microscope"
         },
         {
            "tool_id": "med-i-9",
            "tool_name":"Glucose meter",
            "tool_imgsource":"images/medical/intermediate/glucose-meter.png",
            "tool_description":"A glucose meter is a medical device for determining the approximate concentration of glucose in the blood. It can also be a strip of glucose paper dipped into a substance and measured to the glucose chart. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Glucose_meter"
         },
         {
            "tool_id": "med-i-10",
            "tool_name":"Funnel",
            "tool_imgsource":"images/medical/intermediate/funnel.png",
            "tool_description":"A funnel is a tube or pipe that is wide at the top and narrow at the bottom, used for guiding liquid or powder into a small opening. Funnels are usually made of stainless steel, aluminium, glass, or plastic. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Funnel"
         },
         {
            "tool_id": "med-i-11",
            "tool_name":"Beaker",
            "tool_imgsource":"images/medical/intermediate/beaker.png",
            "tool_description":"A beaker is a generally cylindrical container with a flat bottom.[1] Most also have a small spout (or beak) to aid pouring. Beakers are available in a wide range of sizes, from one millilitre up to several litres.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Beaker_(glassware)"
         },
         {
            "tool_id": "med-i-12",
            "tool_name":"Suture",
            "tool_imgsource":"images/medical/intermediate/suture.png",
            "tool_description":"Surgical suture is a medical device used to hold body tissues together after an injury or surgery. Application generally involves using a needle with an attached length of thread. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Surgical_suture"
         },
         {
            "tool_id": "med-i-13",
            "tool_name":"Dental drill",
            "tool_imgsource":"images/medical/intermediate/dental-drill.png",
            "tool_description":"A dental drill or handpiece is a hand-held, mechanical instrument used to perform a variety of common dental procedures, including removing decay, polishing fillings, and altering prostheses. The handpiece itself consists of internal mechanical components which initiate a rotational force and provide power to the cutting instrument, usually a dental burr. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Dental_drill"
         },
         {
            "tool_id": "med-i-14",
            "tool_name":"Mouth mirror",
            "tool_imgsource":"images/medical/intermediate/mouth-mirror.png",
            "tool_description":"A mouth mirror or dentist's mirror is an instrument used in dentistry. The head of the mirror is usually round, and the most common sizes used are the No. 4 (18 mm) and No. 5 (20 mm).",
            "tool_description_source":"https://en.wikipedia.org/wiki/Mouth_mirror"
         },
         {
            "tool_id": "med-i-15",
            "tool_name":"Periodontal probe",
            "tool_imgsource":"images/medical/intermediate/dental-probe.png",
            "tool_description":"A periodontal probe is an instrument in dentistry commonly used in the dental armamentarium. It is usually long, thin, and blunted at the end. The primary purpose of a periodontal probe is to measure pocket depths around a tooth in order to establish the state of health of the periodontium. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Periodontal_probe"
         },
         {
            "tool_id": "med-i-16",
            "tool_name":"X-ray machine",
            "tool_imgsource":"images/medical/intermediate/x-ray-machine.png",
            "tool_description":"An X-ray machine is any machine that involves X-rays. It may consist of an X-ray generator and an X-ray detector.",
            "tool_description_source":"https://en.wikipedia.org/wiki/X-ray_machine"
         }
      ],
      "Advanced": [
         {
            "tool_id": "med-a-1",
            "tool_name":"Autoclave",
            "tool_imgsource":"images/medical/advanced/autoclave.png",
            "tool_description":"An autoclave is a pressure chamber used to carry out industrial processes requiring elevated temperature and pressure different from ambient air pressure. Autoclaves are used in medical applications to perform sterilization.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Autoclave"
         },
         {
            "tool_id": "med-a-2",
            "tool_name":"Automated External Defibrillator",
            "tool_imgsource":"images/medical/advanced/defibrillator.png",
            "tool_description":"An automated external defibrillator (AED) is a portable electronic device that automatically diagnoses the life-threatening cardiac arrhythmias of ventricular fibrillation and pulseless ventricular tachycardia,[1] and is able to treat them through defibrillation, the application of electricity which stops the arrhythmia, allowing the heart to re-establish an effective rhythm.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Automated_external_defibrillator"
         },
         {
            "tool_id": "med-a-3",
            "tool_name":"Cannula",
            "tool_imgsource":"images/medical/advanced/cannula.png",
            "tool_description":"A cannula is a tube that can be inserted into the body, often for the delivery or removal of fluid or for the gathering of data. In simple terms, a cannula can surround the inner or outer surfaces of a trocar needle thus extending the effective needle length by at least half the length of the original needle.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Cannula"
         },
         {
            "tool_id": "med-a-4",
            "tool_name":"Dialyser",
            "tool_imgsource":"images/medical/advanced/dialyser.png",
            "tool_description":"Dialyser is a machine that removes excess water, solutes, and toxins from the blood in people whose kidneys can no longer perform these functions naturally. Dialysis is used as a temporary measure in either acute kidney injury or in those awaiting kidney transplant and as a permanent measure in those for whom a transplant is not indicated or not possible.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Dialysis"
         },
         {
            "tool_id": "med-a-5",
            "tool_name":"Electro Cardio Graph machine",
            "tool_imgsource":"images/medical/advanced/ecg.png",
            "tool_description":"Electrocardiographs are recorded by machines that consist of a set of electrodes connected to a central unit. Early ECG machines were constructed with analog electronics where the signal drove a motor to print out the signal onto paper. Today, electrocardiographs use analog-to-digital converters to convert the electrical activity of the heart to a digital signal.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Electrocardiography#Electrocardiograph_machines"
         },
         {
            "tool_id": "med-a-6",
            "tool_name":"Ultrasound",
            "tool_imgsource":"images/medical/advanced/ultrasound.png",
            "tool_description":"Ultrasound is sound waves with frequencies higher than the upper audible limit of human hearing. Ultrasonic devices are used to detect objects and measure distances. Ultrasound imaging or sonography is often used in medicine.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Ultrasound"
         },
         {
            "tool_id": "med-a-7",
            "tool_name":"Ophthalmoscope",
            "tool_imgsource":"images/medical/advanced/ophthalmoscope.png",
            "tool_description":"Ophthalmoscopy, also called funduscopy, is a test that allows a health professional to see inside the fundus of the eye and other structures using an ophthalmoscope (or funduscope). It is done as part of an eye examination and may be done as part of a routine physical examination.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Ophthalmoscopy"
         },
         {
            "tool_id": "med-a-8",
            "tool_name":"Otoscope",
            "tool_imgsource":"images/medical/advanced/otoscope.png",
            "tool_description":"An otoscope or auriscope is a medical device which is used to look into the ears. Health care providers use otoscopes to screen for illness during regular check-ups and also to investigate ear symptoms. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Otoscope"
         },
         {
            "tool_id": "med-a-9",
            "tool_name":"Ventilator",
            "tool_imgsource":"images/medical/advanced/ventilator.png",
            "tool_description":"A medical ventilator (or simply ventilator) is a machine designed to provide mechanical ventilation by moving breathable air into and out of the lungs, to deliver breaths to a patient who is physically unable to breathe, or breathing insufficiently.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Medical_ventilator"
         },
         {
            "tool_id": "med-a-10",
            "tool_name":"Proctoscope",
            "tool_imgsource":"images/medical/advanced/proctoscope.png",
            "tool_description":" A proctoscope is a short, straight, rigid, hollow metal tube, and usually has a small light bulb mounted at the end. It is approximately 5 inches or 15 cm long.  During proctoscopy, the proctoscope is lubricated and inserted into the rectum, and then the obturator is removed, allowing an unobstructed view of the interior of the rectal cavity.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Proctoscopy"
         },
         {
            "tool_id": "med-a-11",
            "tool_name":"Rectoscope",
            "tool_imgsource":"images/medical/advanced/rectoscope.png",
            "tool_description":"A rectoscope is a short, straight, rigid, hollow metal tube, and usually has a small light bulb mounted at the end and is approximately 10 inches or 25 cm long used to inspect for hemorrhoids or rectal polyps.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Proctoscopy"
         },
         {
            "tool_id": "med-a-12",
            "tool_name":"Sphygmomanometer",
            "tool_imgsource":"images/medical/advanced/sphygmomanometer.png",
            "tool_description":"A sphygmomanometer, also known as a blood pressure meter, blood pressure monitor, or blood pressure gauge, is a device used to measure blood pressure, composed of an inflatable cuff to collapse and then release the artery under the cuff in a controlled manner, and a mercury or mechanical manometer to measure the pressure.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Sphygmomanometer"
         },
         {
            "tool_id": "med-a-13",
            "tool_name":"Magnetic Resonance Imaging",
            "tool_imgsource":"images/medical/advanced/mri.png",
            "tool_description":"Magnetic resonance imaging (MRI) is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body in both health and disease. MRI scanners use strong magnetic fields, magnetic field gradients, and radio waves to generate images of the organs in the body.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Magnetic_resonance_imaging"
         },
         {
            "tool_id": "med-a-14",
            "tool_name":"Intra Uterine Device",
            "tool_imgsource":"images/medical/advanced/intrauterine-device.png",
            "tool_description":"An intrauterine device (IUD), also known as intrauterine contraceptive device (IUCD or ICD) or coil, is a small, often T-shaped birth control device that is inserted into a woman's uterus to prevent pregnancy. IUDs are one form of long-acting reversible birth control",
            "tool_description_source":"https://en.wikipedia.org/wiki/Intrauterine_device"
         },
         {
            "tool_id": "med-a-15",
            "tool_name":"Pacemaker",
            "tool_imgsource":"images/medical/advanced/pacemaker.png",
            "tool_description":"A pacemaker (or artificial pacemaker, so as not to be confused with the natural pacemaker of the heart) is a medical device that generates electrical impulses delivered by electrodes to contract the heart muscles and regulate the electrical conduction system of the heart.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Artificial_cardiac_pacemaker"
         }
      ]
   },
   // medical ends here
    "Computers and Electrical":{
      "Basic":[
         {
            "tool_id": "comp-b-1",
            "tool_name":"keyboard",
            "tool_imgsource":"images/computer/basic/keyboard.png",
            "tool_description":"In computing, a computer keyboard is a typewriter-style device which uses an arrangement of buttons or keys to act as mechanical levers or electronic switches. Following the decline of punch cards and paper tape, interaction via teleprinter-style keyboards became the main input method for computers.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Computer_keyboard"
         },
         {
            "tool_id": "comp-b-2",
            "tool_name":"mouse",
            "tool_imgsource":"images/computer/basic/mouse.png",
            "tool_description":"A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Computer_mouse"
         },
         {
            "tool_id": "comp-b-3",
            "tool_name":"monitor",
            "tool_imgsource":"images/computer/basic/monitor.png",
            "tool_description":"A computer monitor is an output device that displays information in pictorial form. A monitor usually comprises the display device, circuitry, casing, and power supply.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Computer_monitor"
         },
         {
            "tool_id": "comp-b-5",
            "tool_name":"telephone",
            "tool_imgsource":"images/computer/basic/telephone.png",
            "tool_description":"A telephone or phone, is a telecommunications device that permits two or more users to conduct a conversation when they are too far apart to be heard directly.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Telephone"
         },
         {
            "tool_id": "comp-b-6",
            "tool_name":"printer",
            "tool_imgsource":"images/computer/basic/printer.png",
            "tool_description":"In computing, a printer is a peripheral device which makes a persistent representation of graphics or text on paper. While most output is human-readable, bar code printers are an example of an expanded use for printers.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Printer_(computing)"
         },
         {
            "tool_id": "comp-b-7",
            "tool_name":"scanner",
            "tool_imgsource":"images/computer/basic/scanner.png",
            "tool_description":"An image scanner is a device that optically scans images, printed text, handwriting or an object and converts it to a digital image. Commonly used in offices are variations of the desktop flatbed scanner where the document is placed on a glass window for scanning. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Image_scanner"
         },
         {
            "tool_id": "comp-b-8",
            "tool_name":"pen drive",
            "tool_imgsource":"images/computer/basic/pen_drive.png",
            "tool_description":"A pen drive, also known as a thumb drive, USB flash drive, gig stick, flash stick, jump drive, disk key, disk on key , flash-drive, memory stick, USB key, USB stick or USB memory, is a data storage device that includes flash memory with an integrated USB interface. It is typically removable, rewritable and much smaller than an optical disc.",
            "tool_description_source":"https://en.wikipedia.org/wiki/USB_flash_drive"
         },
         {
            "tool_id": "comp-b-9",
            "tool_name":"headphones",
            "tool_imgsource":"images/computer/basic/headphones.png",
            "tool_description":"Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Headphones"
         },
         {
            "tool_id": "comp-b-10",
            "tool_name":"Universal Service Bus Cable",
            "tool_imgsource":"images/computer/basic/usb.png",
            "tool_description":"USB (abbreviation of Universal Serial Bus) is an industry standard that establishes specifications for cables and connectors and protocols for connection, communication and power supply between computers, peripheral devices and other computers. Released in 1996, the USB standard is currently maintained by the USB Implementers Forum (USB IF). ",
            "tool_description_source":"https://en.wikipedia.org/wiki/USB"
         },
         {
            "tool_id": "comp-b-11",
            "tool_name":"Compact Disc",
            "tool_imgsource":"images/computer/basic/cd.png",
            "tool_description":"Compact disc (CD) is a digital optical disc data storage format that was co-developed by Philips and Sony and released in 1982. The format was originally developed to store and play only sound recordings (CD-DA) but was later adapted for storage of data (CD-ROM). ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Compact_disc"
         },
         {
            "tool_id": "comp-b-12",
            "tool_name":"Secure Digital Card",
            "tool_imgsource":"images/computer/basic/sd_card.png",
            "tool_description":"Secure Digital, officially abbreviated as SD, is a non-volatile memory card format developed by the SD Card Association (SDA) for use in portable devices. The standard was introduced in August 1999 by joint efforts between SanDisk, Panasonic (Matsushita Electric) and Toshiba as an improvement over MultiMediaCards (MMC),",
            "tool_description_source":"https://en.wikipedia.org/wiki/SD_card"
         },
         {
            "tool_id": "comp-b-13",
            "tool_name":"Central Processing Unit",
            "tool_imgsource":"images/computer/basic/cpu.png",
            "tool_description":"A central processing unit (CPU), also called a central processor or main processor, is the electronic circuitry within a computer that carries out the instructions of a computer program by performing the basic arithmetic, logic, controlling, and input/output (I/O) operations specified by the instructions. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Central_processing_unit"
         },
         {
            "tool_id": "comp-b-14",
            "tool_name":"Webcam",
            "tool_imgsource":"images/computer/basic/webcam.png",
            "tool_description":"A webcam is a video camera that feeds or streams its image in real time to or through a computer to a computer network. The term webcam (a clipped compound) may also be used in its original sense of a video camera connected to the Web continuously for an indefinite time, rather than for a particular session,  generally supplying a view for anyone who visits its web page over the Internet.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Webcam"
         },
         {
            "tool_id": "comp-b-15",
            "tool_name":"Projector",
            "tool_imgsource":"images/computer/basic/projector.png",
            "tool_description":"A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Projector"
         },
         {
            "tool_id": "comp-b-16",
            "tool_name":"Router",
            "tool_imgsource":"images/computer/basic/router.png",
            "tool_description":"A router is a networking device that forwards data packets between computer networks. Routers perform the traffic directing functions on the Internet. Data sent through the internet, such as a web page or email, is in the form of data packets.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Router_(computing)"
         }
      ],
      "Intermediate": [
         {
            "tool_id": "comp-i-1",
            "tool_name":"Hub",
            "tool_imgsource":"images/computer/intermediate/hub.png",
            "tool_description":"A hub is a network hardware device for connecting multiple Ethernet devices together and making them act as a single network segment. It has multiple input/output (I/O) ports, in which a signal introduced at the input of any port appears at the output of every port except the original incoming.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Ethernet_hub"
         },
         {
            "tool_id": "comp-i-2",
            "tool_name":"High Definition Multimedia Interface",
            "tool_imgsource":"images/computer/intermediate/hdmi.png",
            "tool_description":"HDMI (High-Definition Multimedia Interface) is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI-compliant source device, such as a display controller, to a compatible computer monitor, video projector, digital television, or digital audio device. HDMI is a digital replacement for analog video standards.",
            "tool_description_source":"https://en.wikipedia.org/wiki/HDMI"
         },
         {
            "tool_id": "comp-i-3",
            "tool_name":"Ethernet",
            "tool_imgsource":"images/computer/intermediate/ethernet.png",
            "tool_description":"Ethernet is a family of computer networking technologies commonly used in local area networks (LAN), metropolitan area networks (MAN) and wide area networks (WAN). It was commercially introduced in 1980 and first standardized in 1983 as IEEE 802.3, and has since retained a good deal of backward compatibility and been refined to support higher bit rates and longer link distances.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Ethernet"
         },
         {
            "tool_id": "comp-i-5",
            "tool_name":"Video Graphics Array",
            "tool_imgsource":"images/computer/intermediate/vga.png",
            "tool_description":"A Video Graphics Array (VGA) connector is a three-row 15-pin DE-15 connector. The 15-pin VGA connector was provided on many video cards, computer monitors, laptop computers, projectors, and high definition television sets. On laptop computers or other small devices, a mini-VGA port was sometimes used in place of the full-sized VGA connector.",
            "tool_description_source":"https://en.wikipedia.org/wiki/VGA_connector"
         },
         {
            "tool_id": "comp-i-6",
            "tool_name":"Resistor",
            "tool_imgsource":"images/computer/intermediate/resistor.png",
            "tool_description":"A resistor is a passive two-terminal electrical component that implements electrical resistance as a circuit element. In electronic circuits, resistors are used to reduce current flow, adjust signal levels, to divide voltages, bias active elements, and terminate transmission lines, among other uses.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Resistor"
         },
         {
            "tool_id": "comp-i-7",
            "tool_name":"Capacitor",
            "tool_imgsource":"images/computer/intermediate/capacitor.png",
            "tool_description":"A capacitor is a passive two-terminal electronic component that stores electrical energy in an electric field. The effect of a capacitor is known as capacitance. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Capacitor"
         },
         {
            "tool_id": "comp-i-8",
            "tool_name":"Light Emitting Diode",
            "tool_imgsource":"images/computer/intermediate/led.png",
            "tool_description":"A light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it. Electrons in the semiconductor recombine with electron holes, releasing energy in the form of photons.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Light-emitting_diode"
         },
         {
            "tool_id": "comp-i-9",
            "tool_name":"Transistor",
            "tool_imgsource":"images/computer/intermediate/transistor.png",
            "tool_description":"A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power. It is composed of semiconductor material usually with at least three terminals for connection to an external circuit. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Transistor"
         },
         {
            "tool_id": "comp-i-10",
            "tool_name":"Integrated Circuit",
            "tool_imgsource":"images/computer/intermediate/integrated_circuit.png",
            "tool_description":"An integrated circuit (also referred to as an IC, a chip, or a microchip) is a set of electronic circuits on one small flat piece (or chip) of semiconductor material that is normally silicon. The integration of large numbers of tiny transistors into a small chip results in circuits that are orders of magnitude smaller, faster, and less expensive than those constructed of discrete electronic components. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Integrated_circuit"
         },
         {
            "tool_id": "comp-i-11",
            "tool_name":"Soldering Iron",
            "tool_imgsource":"images/computer/intermediate/soldering-iron.png",
            "tool_description":"A soldering iron is a hand tool used in soldering. It supplies heat to melt solder so that it can flow into the joint between two workpieces. A soldering iron is composed of a heated metal tip and an insulated handle. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Soldering_iron"
         },
         {
            "tool_id": "comp-i-12",
            "tool_name":"Multimeter",
            "tool_imgsource":"images/computer/intermediate/multimeter.png",
            "tool_description":"A multimeter or a multitester, also known as a VOM (volt-ohm-milliammeter), is an electronic measuring instrument that combines several measurement functions in one unit. A typical multimeter can measure voltage, current, and resistance. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Multimeter"
         },
         {
            "tool_id": "comp-i-13",
            "tool_name":"Oscilloscope",
            "tool_imgsource":"images/computer/intermediate/oscilloscope.png",
            "tool_description":"An oscilloscope, previously called an oscillograph, and informally known as a scope or o-scope, CRO (for cathode-ray oscilloscope), or DSO (for the more modern digital storage oscilloscope), is a type of electronic test instrument that graphically displays varying signal voltages, usually as a two-dimensional plot of one or more signals as a function of time.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Oscilloscope"
         },
         {
            "tool_id": "comp-i-14",
            "tool_name":"Seven Segment Display",
            "tool_imgsource":"images/computer/intermediate/segment_display.png",
            "tool_description":"A seven-segment display (SSD), or seven-segment indicator, is a form of electronic display device for displaying decimal numerals that is an alternative to the more complex dot matrix displays. Seven-segment displays are widely used in digital clocks, electronic meters, basic calculators, and other electronic devices that display numerical information.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Seven-segment_display"
         },
         {
            "tool_id": "comp-i-15",
            "tool_name":"Alligator Clip",
            "tool_imgsource":"images/computer/intermediate/alligator-clip.png",
            "tool_description":"A crocodile clip (also alligator clip) is a sprung metal clip with long, serrated jaws which is used for creating a temporary electrical connection. This simple mechanical device gets its name from the resemblance of its jaws to that of an alligator's or crocodile's. It is used to connect an electrical cable to a battery or some other component. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Crocodile_clip"
         },
         {
            "tool_id": "comp-i-16",
            "tool_name":"Circuit Switch",
            "tool_imgsource":"images/computer/intermediate/circuit-switch.png",
            "tool_description":"In electrical engineering, a switch is an electrical component that can make or break an electrical circuit, interrupting the current or diverting it from one conductor to another. The mechanism of a switch removes or restores the conducting path in a circuit when it is operated. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Switch"
         },
         {
            "tool_id": "comp-i-17",
            "tool_name":"Motherboard",
            "tool_imgsource":"images/computer/intermediate/motherboard.png",
            "tool_description":"A motherboard is the main printed circuit board (PCB) found in general purpose computers and other expandable systems. It holds and allows communication between many of the crucial electronic components of a system, such as the central processing unit (CPU) and memory, and provides connectors for other peripherals.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Motherboard"
         }
      ],
      "Advanced":[
         {
            "tool_id": "comp-a-1",
            "tool_name":"Processor",
            "tool_imgsource":"images/computer/advanced/processor.png",
            "tool_description":"A central processor or main processor, is the electronic circuitry within a computer that carries out the instructions of a computer program by performing the basic arithmetic, logic, controlling, and input/output (I/O) operations specified by the instructions. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Central_processing_unit"
         },
         {
            "tool_id": "comp-a-2",
            "tool_name":"Power Supply Unit",
            "tool_imgsource":"images/computer/advanced/power-supply-unit.png",
            "tool_description":"A power supply unit (or PSU) converts mains AC to low-voltage regulated DC power for the internal components of a computer. Modern personal computers universally use switched-mode power supplies.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Power_supply_unit_(computer)"
         },
         {
            "tool_id": "comp-a-3",
            "tool_name":"Hard Disk Drive",
            "tool_imgsource":"images/computer/advanced/hard-drive.png",
            "tool_description":"A hard disk drive (HDD), hard disk, hard drive, or fixed disk, is an electro-mechanical data storage device that uses magnetic storage to store and retrieve digital information using one or more rigid rapidly rotating disks (platters) coated with magnetic material. The platters are paired with magnetic heads, usually arranged on a moving actuator arm, which read and write data to the platter surfaces.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Hard_disk_drive"
         },
         {
            "tool_id": "comp-a-4",
            "tool_name":"Video Card",
            "tool_imgsource":"images/computer/advanced/video-card.png",
            "tool_description":"A video card (also called a display card, graphics card, display adapter, or graphics adapter) is an expansion card which generates a feed of output images to a display device (such as a computer monitor). Frequently, these are advertised as discrete or dedicated graphics cards, emphasizing the distinction between these and integrated graphics",
            "tool_description_source":"https://en.wikipedia.org/wiki/Video_card"
         },
         {
            "tool_id": "comp-a-5",
            "tool_name":"Network Card",
            "tool_imgsource":"images/computer/advanced/network-card.png",
            "tool_description":"A network card (NIC, also known as a network interface card, network adapter, LAN adapter or physical network interface, and by similar terms) is a computer hardware component that connects a computer to a computer network. Early network interface controllers were commonly implemented on expansion cards that plugged into a computer bus.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Network_interface_controller"
         },
         {
            "tool_id": "comp-a-6",
            "tool_name":"Serial Advanced Technology Attachment",
            "tool_imgsource":"images/computer/advanced/sata.png",
            "tool_description":"Serial Advanced Technology Attachment (SATA, abbreviated from Serial AT Attachment) is a computer bus interface that connects host bus adapters to mass storage devices such as hard disk drives, optical drives, and solid-state drives. Serial ATA succeeded the earlier Parallel ATA (PATA) standard to become the predominant interface for storage devices.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Serial_ATA"
         },
         {
            "tool_id": "comp-a-7",
            "tool_name":"Advanced Technology Extended",
            "tool_imgsource":"images/computer/advanced/atx-cable.png",
            "tool_description":"ATX (Advanced Technology eXtended) is a motherboard and power supply configuration specification developed by Intel in 1995 to improve on previous de facto standards like the AT design. It was the first major change in desktop computer enclosure, motherboard and power supply design in many years, improving standardization and interchangeability of parts. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/ATX"
         },
         {
            "tool_id": "comp-a-8",
            "tool_name":"Fuse",
            "tool_imgsource":"images/computer/advanced/fuse.png",
            "tool_description":"In electronics and electrical engineering, a fuse is an electrical safety device that operates to provide overcurrent protection of an electrical circuit. Its essential component is a metal wire or strip that melts when too much current flows through it, thereby interrupting the current. It is a sacrificial device; once a fuse has operated it is an open circuit, and it must be replaced or rewired, depending on type.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Fuse_(electrical)"
         },
         {
            "tool_id": "comp-a-9",
            "tool_name":"Transformer",
            "tool_imgsource":"images/computer/advanced/transformer.png",
            "tool_description":"A transformer is a static electrical device that transfers electrical energy between two or more circuits. A varying current in one coil of the transformer produces a varying magnetic flux, which, in turn, induces a varying electromotive force across a second coil wound around the same core. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Transformer"
         },
         {
            "tool_id": "comp-a-10",
            "tool_name":"Circuit Breaker",
            "tool_imgsource":"images/computer/advanced/circuit-breaker.png",
            "tool_description":"A circuit breaker is an automatically operated electrical switch designed to protect an electrical circuit from damage caused by excess current from an overload or short circuit. Its basic function is to interrupt current flow after a fault is detected. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Circuit_breaker"
         }
      ]
   },
   "Mechanical": {
      "Basic": [
         {
            "tool_id": "mech-b-1",
            "tool_name":"hammer",
            "tool_imgsource":"images/mechanical/basic/hammer.png",
            "tool_description":"A modern day hammer is a tool consisting of a weighted head fixed to a long handle that is swung to deliver an impact to a small area of an object. This can be, for example, to drive nails into wood, to shape metal (as with a forge), or to crush rock.[1][2] Hammers are used for a wide range of driving, shaping, and breaking applications.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Hammer"
         },
         {
            "tool_id": "mech-b-2",
            "tool_name":"Engine",
            "tool_imgsource":"images/mechanical/basic/engine.png",
            "tool_description":"An engine or motor is a machine designed to convert one form of energy into mechanical energy. Heat engines, like the internal combustion engine, burn a fuel to create heat which is then used to do work.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Engine"
         },
         {
            "tool_id": "mech-b-3",
            "tool_name":"Spanner",
            "tool_imgsource":"images/mechanical/basic/spanner.png",
            "tool_description":"A wrench or spanner is a tool used to provide grip and mechanical advantage in applying torque to turn objects—usually rotary fasteners, such as nuts and bolts—or keep them from turning.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Wrench"
         },
         {
            "tool_id": "mech-b-4",
            "tool_name":"Nut",
            "tool_imgsource":"images/mechanical/basic/nut.png",
            "tool_description":"A nut is a type of fastener with a threaded hole. Nuts are almost always used in conjunction with a mating bolt to fasten multiple parts together. The two partners are kept together by a combination of their threads' friction, a slight stretching of the bolt, and compression of the parts to be held together.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Nut_(hardware)"
         },
         {
            "tool_id": "mech-b-5",
            "tool_name":"Screwdriver",
            "tool_imgsource":"images/mechanical/basic/screwdriver.png",
            "tool_description":"A screwdriver is a tool, manual or powered, for screwing and unscrewing (inserting and removing) screws. A typical simple screwdriver has a handle and a shaft, ending in a tip the user puts into the screw head before turning the handle. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Screwdriver"
         },
         {
            "tool_id": "mech-b-6",
            "tool_name":"Plier",
            "tool_imgsource":"images/mechanical/basic/plier.png",
            "tool_description":"Pliers are a hand tool used to hold objects firmly, possibly developed from tongs used to handle hot metal in Bronze Age Europe. They are also useful for bending and compressing a wide range of materials.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Pliers"
         },
         {
            "tool_id": "mech-b-7",
            "tool_name":"Crowbar",
            "tool_imgsource":"images/mechanical/basic/crowbar.png",
            "tool_description":"A crowbar, also called a wrecking bar, pry bar or prybar, pinch-bar, or occasionally a prise bar or prisebar, colloquially, in Britain and Australia, is a tool consisting of a metal bar with a single curved end and flattened points, often with a small fissure on one or both ends for removing nails. They are generally used either to force apart two objects or to remove nails.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Crowbar_(tool)"
         },
         {
            "tool_id": "mech-b-8",
            "tool_name":"Power Drill",
            "tool_imgsource":"images/mechanical/basic/power-drill.png",
            "tool_description":"A drill is a tool primarily used for making round holes or driving fasteners. It is fitted with a bit, either a drill or driver, depending on application, secured by a chuck. Some powered drills also include a hammer function.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Drill"
         },
         {
            "tool_id": "mech-b-9",
            "tool_name":"Pulley",
            "tool_imgsource":"images/mechanical/basic/pulley.png",
            "tool_description":"A pulley is a wheel on an axle or shaft that is designed to support movement and change of direction of a taut cable or belt, or transfer of power between the shaft and cable or belt. In the case of a pulley supported by a frame or shell that does not transfer power to a shaft, but is used to guide the cable or exert a force, the supporting shell is called a block, and the pulley may be called a sheave.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Pulley"
         },
         {
            "tool_id": "mech-b-10",
            "tool_name":"Saw",
            "tool_imgsource":"images/mechanical/basic/saw.png",
            "tool_description":"A saw is a tool consisting of a tough blade, wire, or chain with a hard toothed edge. It is used to cut through material, very often wood though sometimes metal or stone. The cut is made by placing the toothed edge against the material and moving it forcefully forth and less forcefully back or continuously forward. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Saw"
         },
         {
            "tool_id": "mech-b-11",
            "tool_name":"Mallet",
            "tool_imgsource":"images/mechanical/basic/mallet.png",
            "tool_description":"A mallet is a kind of hammer, often made of rubber or sometimes wood, that is smaller than a maul or beetle, and usually has a relatively large head. The term is descriptive of the overall size and proportions of the tool, and not the materials it may be made of, though most mallets have striking faces that are softer than steel.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Mallet"
         },
         {
            "tool_id": "mech-b-12",
            "tool_name":"Axle",
            "tool_imgsource":"images/mechanical/basic/axle.png",
            "tool_description":"An axle is a central shaft for a rotating wheel or gear. On wheeled vehicles, the axle may be fixed to the wheels, rotating with them, or fixed to the vehicle, with the wheels rotating around the axle.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Axle"
         },
         {
            "tool_id": "mech-b-13",
            "tool_name":"Automotive Battery",
            "tool_imgsource":"images/mechanical/basic/battery.png",
            "tool_description":"An automotive battery is a rechargeable battery that supplies electrical current to a motor vehicle. Its main purpose is to feed the starter, which starts the engine. Once the engine is running, power for the car's electrical systems is supplied by the alternator.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Automotive_battery"
         },
         {
            "tool_id": "mech-b-14",
            "tool_name":"Headlamp",
            "tool_imgsource":"images/mechanical/basic/headlight.png",
            "tool_description":"A headlamp is a lamp attached to the front of a vehicle to light the road ahead. Headlamps are also often called headlights, but in the most precise usage, headlamp is the term for the device itself and headlight is the term for the beam of light produced and distributed by the device.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Headlamp"
         },
         {
            "tool_id": "mech-b-15",
            "tool_name":"Tail lamp",
            "tool_imgsource":"images/mechanical/basic/taillight.png",
            "tool_description":"Conspicuity for the rear of a vehicle is provided by rear position lamps (also called tail lamps or tail lights). These are required to produce only red light and to be wired such that they are lit whenever the front position lamps are lit, including when the headlamps are on.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Automotive_lighting#Rear_position_lamps_(tail_lamps)"
         },
         {
            "tool_id": "mech-b-16",
            "tool_name":"Screw",
            "tool_imgsource":"images/mechanical/basic/screw.png",
            "tool_description":"A screw is a type of fastener, in some ways similar to a bolt (see Differentiation between bolt and screw below), typically made of metal, and characterized by a helical ridge, known as a male thread (external thread). Screws are used to fasten materials by digging in and wedging into a material when turned, while the thread cuts grooves in the fastened material that may help pull fastened materials together and prevent pull-out.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Screw"
         },
         {
            "tool_id": "mech-b-17",
            "tool_name":"Wiper",
            "tool_imgsource":"images/mechanical/basic/wiper.png",
            "tool_description":"A windscreen wiper or windshield wiper (American English) is a device used to remove rain, snow, ice and debris from a vehicle's front window. Almost all motor vehicles, including cars, trucks, buses, train locomotives, and watercraft with a cabin—and some aircraft—are equipped with one or more such wipers, which are usually a legal requirement.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Windscreen_wiper"
         }
      ],
      "Intermediate":[
         {
            "tool_id": "mech-i-1",
            "tool_name":"Blowtorch",
            "tool_imgsource":"images/mechanical/intermediate/blowtorch.png",
            "tool_description":"A blowtorch (U.S. and Australia), or blowlamp (UK), is a fuel-burning tool used for applying flame and heat to various applications, usually metalworking. Early blowtorches used liquid fuel, carried in a refillable reservoir attached to the lamp. Modern blowtorches are mostly gas-fuelled. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Blowtorch"
         },
         {
            "tool_id": "mech-i-2",
            "tool_name":"Ratchet",
            "tool_imgsource":"images/mechanical/intermediate/ratchet.png",
            "tool_description":"A ratchet is a mechanical device that allows continuous linear or rotary motion in only one direction while preventing motion in the opposite direction. Ratchets are widely used in machinery and tools. The word ratchet is also used informally to refer to a ratcheting socket wrench.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Ratchet_(device)"
         },
         {
            "tool_id": "mech-i-3",
            "tool_name":"Jackscrew",
            "tool_imgsource":"images/mechanical/intermediate/jackscrew.png",
            "tool_description":"A jackscrew, or screw jack, is a type of jack that is operated by turning a leadscrew. It is commonly used to lift moderately heavy weights, such as vehicles; to raise and lower the horizontal stabilizers of aircraft; and an adjustable supports for heavy loads, such as the foundations of houses.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Jackscrew"
         },
         {
            "tool_id": "mech-i-4",
            "tool_name":"Fuel Gauge",
            "tool_imgsource":"images/mechanical/intermediate/fuel-gauge.png",
            "tool_description":"In automobile and aircraft engineering a fuel gauge or gas gauge is an instrument used to indicate the amount of fuel in a fuel tank.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Fuel_gauge"
         },
         {
            "tool_id": "mech-i-5",
            "tool_name":"Cogwheel",
            "tool_imgsource":"images/mechanical/intermediate/cogwheel.png",
            "tool_description":"A cogwheel is a rotating machine part having cut teeth, or in the case of a cogwheel, inserted teeth (called cogs), which mesh with another toothed part to transmit torque. Geared devices can change the speed, torque, and direction of a power source. Gears almost always produce a change in torque, creating a mechanical advantage, through their gear ratio, and thus may be considered a simple machine. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Gear"
         },
         {
            "tool_id": "mech-i-6",
            "tool_name":"Jackhammer",
            "tool_imgsource":"images/mechanical/intermediate/jackhammer.png",
            "tool_description":"A jackhammer is a pneumatic or electro-mechanical tool that combines a hammer directly with a chisel. Hand-held jackhammers are generally powered by compressed air, but some are also powered by electric motors.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Jackhammer"
         },
         {
            "tool_id": "mech-i-6",
            "tool_name":"Speedometer",
            "tool_imgsource":"images/mechanical/intermediate/speedometer.png",
            "tool_description":"A speedometer or a speed meter is a gauge that measures and displays the instantaneous speed of a vehicle. Now universally fitted to motor vehicles, they started to be available as options in the 1900s, and as standard equipment from about 1910 onwards.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Speedometer"
         },
         {
            "tool_id": "mech-i-7",
            "tool_name":"Odometer",
            "tool_imgsource":"images/mechanical/intermediate/odometer.png",
            "tool_description":"An odometer or odograph is an instrument used for measuring the distance travelled by a vehicle, such as a bicycle or car. The device may be electronic, mechanical, or a combination of the two.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Odometer"
         },
         {
            "tool_id": "mech-i-8",
            "tool_name":"Steering Wheel",
            "tool_imgsource":"images/mechanical/intermediate/steering-wheel.png",
            "tool_description":"A steering wheel (also called a driving wheel or a hand wheel) is a type of steering control in vehicles. Steering wheels are used in most modern land vehicles, including all mass-production automobiles, as well as buses, light and heavy trucks, and tractors.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Steering_wheel"
         },
         {
            "tool_id": "mech-i-9",
            "tool_name":"Hand Brake",
            "tool_imgsource":"images/mechanical/intermediate/handbrake.png",
            "tool_description":"In road vehicles, the parking brake, also known as a hand brake or emergency brake (e-brake), is a mechanism used to keep the vehicle securely motionless when parked. Historically, it was used to help perform an emergency stop should the main hydraulic brakes fail.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Parking_brake"
         },
         {
            "tool_id": "mech-i-10",
            "tool_name":"Exhaust Pipe",
            "tool_imgsource":"images/mechanical/intermediate/exhaust-pipe.png",
            "tool_description":"An exhaust system is usually piping used to guide reaction exhaust gases away from a controlled combustion inside an engine or stove. The entire system conveys burnt gases from the engine and includes one or more exhaust pipes.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Exhaust_system"
         },
         {
            "tool_id": "mech-i-11",
            "tool_name":"Gear Stick",
            "tool_imgsource":"images/mechanical/intermediate/gear.png",
            "tool_description":"A gear stick, gear lever, gearshift or shifter is a metal lever attached to the shift assembly in a manual transmission-equipped automobile and is used to change gears. In an automatic transmission-equipped vehicle, a similar device is known as a gear selector.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Gear_stick"
         },
         {
            "tool_id": "mech-i-12",
            "tool_name":"Chisel",
            "tool_imgsource":"images/mechanical/intermediate/chisel.png",
            "tool_description":"A chisel is a tool with a characteristically shaped cutting edge (such that wood chisels have lent part of their name to a particular grind) of blade on its end, for carving or cutting a hard material such as wood, stone, or metal by hand, struck with a mallet, or mechanical power. The handle and blade of some types of chisel are made of metal or of wood with a sharp edge in it.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Chisel"
         },
         {
            "tool_id": "mech-i-13",
            "tool_name":"Wheel Cover",
            "tool_imgsource":"images/mechanical/intermediate/wheel-cover.png",
            "tool_description":"A hubcap, wheel cover or wheel trim is a decorative disk on an automobile wheel that covers at least a central portion of the wheel, called the hub. An automobile hubcap is used to cover the wheel hub and the wheel fasteners to reduce the accumulation of dirt and moisture.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Hubcap"
         },
         {
            "tool_id": "mech-i-14",
            "tool_name":"Spirit Level",
            "tool_imgsource":"images/mechanical/intermediate/spirit-level.png",
            "tool_description":"A spirit level, bubble level or simply a level is an instrument designed to indicate whether a surface is horizontal (level) or vertical (plumb). Different types of spirit levels may be used by carpenters, stonemasons, bricklayers, other building trades workers, surveyors, millwrights and other metalworkers, and in some photographic or videographic work.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Spirit_level"
         }
      ],
      "Advanced":[
         {
            "tool_id": "mech-a-1",
            "tool_name":"Conveyor Belt",
            "tool_imgsource":"images/mechanical/advanced/conveyor-belt.png",
            "tool_description":"A conveyor belt is the carrying medium of a belt conveyor system. A belt conveyor system is one of many types of conveyor systems. A belt conveyor system consists of two or more pulleys, with an endless loop of carrying medium—the conveyor belt—that rotates about them. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Conveyor_belt"
         },
         {
            "tool_id": "mech-a-2",
            "tool_name":"Spark Plug",
            "tool_imgsource":"images/mechanical/advanced/spark-plug.png",
            "tool_description":"A spark plug is a device for delivering electric current from an ignition system to the combustion chamber of a spark-ignition engine to ignite the compressed fuel/air mixture by an electric spark, while containing combustion pressure within the engine.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Spark_plug"
         },
         {
            "tool_id": "mech-a-3",
            "tool_name":"Piston",
            "tool_imgsource":"images/mechanical/advanced/piston.png",
            "tool_description":"A piston is a component of reciprocating engines, reciprocating pumps, gas compressors and pneumatic cylinders, among other similar mechanisms. It is the moving component that is contained by a cylinder and is made gas-tight by piston rings. In an engine, its purpose is to transfer force from expanding gas in the cylinder to the crankshaft via a piston rod and/or connecting rod. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Piston"
         },
         {
            "tool_id": "mech-a-4",
            "tool_name":"Crankshaft",
            "tool_imgsource":"images/mechanical/advanced/crankshaft.png",
            "tool_description":"A crankshaft is a mechanical part able to perform a conversion between reciprocating motion and rotational motion. In a reciprocating engine, it translates reciprocating motion of the piston into rotational motion; whereas in a reciprocating compressor, it converts the rotational motion into reciprocating motion. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Crankshaft"
         },
         {
            "tool_id": "mech-a-5",
            "tool_name":"Connecting rod",
            "tool_imgsource":"images/mechanical/advanced/connecting-rod.png",
            "tool_description":"A connecting rod is a rigid member which connects a piston to a crank or crankshaft in a reciprocating engine. Together with the crank, it forms a simple mechanism that converts reciprocating motion into rotating motion.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Connecting_rod"
         },
         {
            "tool_id": "mech-a-6",
            "tool_name":"Camshaft",
            "tool_imgsource":"images/mechanical/advanced/.png",
            "tool_description":"A camshaft is a shaft to which a cam is fastened or of which a cam forms an integral part.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Camshaft"
         },
         {
            "tool_id": "mech-a-7",
            "tool_name":"Shock absorber",
            "tool_imgsource":"images/mechanical/advanced/shock-absorber.png",
            "tool_description":"A shock absorber or damper is a mechanical or hydraulic device designed to absorb and damp shock impulses. It does this by converting the kinetic energy of the shock into another form of energy (typically heat) which is then dissipated. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Shock_absorber"
         },
         {
            "tool_id": "mech-a-8",
            "tool_name":"Lathe machine",
            "tool_imgsource":"images/mechanical/advanced/lathe-machine.png",
            "tool_description":"A lathe is a machine tool that rotates a workpiece about an axis of rotation to perform various operations such as cutting, sanding, knurling, drilling, deformation, facing, and turning, with tools that are applied to the workpiece to create an object with symmetry about that axis.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Lathe"
         },
         {
            "tool_id": "mech-a-9",
            "tool_name":"Milling machine",
            "tool_imgsource":"images/mechanical/advanced/milling-machine.png",
            "tool_description":"Milling is the process of machining using rotary cutters to remove material by advancing a cutter into a workpiece. This may be done varying direction on one or several axes, cutter head speed, and pressure.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Milling_(machining)"
         },
         {
            "tool_id": "mech-a-10",
            "tool_name":"Ball bearing",
            "tool_imgsource":"images/mechanical/advanced/ball-bearing.png",
            "tool_description":"A ball bearing is a type of rolling-element bearing that uses balls to maintain the separation between the bearing races. The purpose of a ball bearing is to reduce rotational friction and support radial and axial loads. It achieves this by using at least three races to contain the balls and transmit the loads through the balls.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Ball_bearing"
         },
         {
            "tool_id": "mech-a-11",
            "tool_name":"Carburetor",
            "tool_imgsource":"images/mechanical/advanced/carburetor.png",
            "tool_description":"A carburetor or carburettor is a device that mixes air and fuel for internal combustion engines in the proper air–fuel ratio for combustion. To carburate or carburet (and thus carburation or carburetion, respectively) means to mix the air and fuel or to equip (an engine) with a carburetor for that purpose.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Carburetor"
         },
         {
            "tool_id": "mech-a-12",
            "tool_name":"Radiator",
            "tool_imgsource":"images/mechanical/advanced/radiator.png",
            "tool_description":"Radiators are heat exchangers used to transfer thermal energy from one medium to another for the purpose of cooling and heating. The majority of radiators are constructed to function in automobiles, buildings, and electronics.",
            "tool_description_source":"https://en.wikipedia.org/wiki/Radiator"
         },
         {
            "tool_id": "mech-a-13",
            "tool_name":"Tachometer",
            "tool_imgsource":"images/mechanical/advanced/tachometer.png",
            "tool_description":"A tachometer (revolution-counter, tach, rev-counter, RPM gauge) is an instrument measuring the rotation speed of a shaft or disk, as in a motor or other machine. The device usually displays the revolutions per minute (RPM) on a calibrated analogue dial, but digital displays are increasingly common. ",
            "tool_description_source":"https://en.wikipedia.org/wiki/Tachometer"
         }
      ]
   }
}


/* This is a template for creating an object in localStorage.
property can be pushed in like: window.myQuestionsCompleted[domain][level].push(obj);
Holds an object which will tell which questions are already completed and in which format
*/
window.myQuestionsCompleted = {
  "Medical" : {
    "Basic" : [
    ],
    "Intermediate" : [
    ],
    "Advanced" : [
    ]
  },
  "Computers and Electrical" : {
    "Basic" : [
    ],
    "Intermediate" : [
    ],
    "Advanced" : [
    ]
  },
  "Mechanical" : {
    "Basic" : [
    ],
    "Intermediate" : [
    ],
    "Advanced" : [
    ]
  }
}
