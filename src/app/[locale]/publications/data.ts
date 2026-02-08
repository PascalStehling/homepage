export interface Publication {
  slug: string;
  title: string;
  description: string;
  date: string;
  authors: string;
  pub: string;
  paperURL?: string;
  codeURL?: string;
  webURL?: string;
  content?: string; // In case we want to add HTML/Text content later
}

export const publications: Publication[] = [
  {
    slug: "homomorphic-post-quatum",
    title: "Homomorphic Post-Quantum Cryptography - Evaluation of Module Learning with Error in Homomorphic Cryptography",
    description: "This thesis investigates the conversion of Ring-LWE (R-LWE)-based homomorphic encryption schemes to Module-LWE (M-LWE) and analyses the resulting perfor- mance differences. The advantage of M-LWE is that a fixed-sized polynomial de- gree can be utilized and the security of the system can be changed by increas- ing the vector/matrix dimension. This is the same concept that is utilized in the CRYSTALS-Kyber encryption scheme. The feasibility of transferring R-LWE to M- LWE is demonstrated based on the BFV homomorphic encryption scheme, showing that a functioning homomorphic encryption can be maintained. While the addition is straightforward, the multiplication necessitates the generation of multiple relin- earization (evaluation) keys. It is demonstrated that the practical performance is only slightly inferior to that of R-LWE, with the advantage of smaller ciphertext sizes. However, there is still considerable scope for improvement in theoretical as- pects, such as the study of security benefits and in practice, in enhancing the general performance.",
    date: "2024-10-29",
    authors: "Pascal Stehling",
    pub: "via Hochschule Wismar",
    paperURL: "Thesis: https://it-forensik.fiw.hs-wismar.de/images/4/48/MT_PSTehling.pdf",
    codeURL: "Code: https://github.com/PascalStehling/MasterThesis",
    webURL: "Web: https://it-forensik.fiw.hs-wismar.de/index.php?title=Pascal_Stehling"
  }
];
