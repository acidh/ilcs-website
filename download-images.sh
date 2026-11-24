#!/bin/bash
# Fetches the photos used on the old ilcs.in site into the right folders.
# Use only with permission from the ILCS council. Run:  bash download-images.sh
cd "$(dirname "$0")"
B=https://ilcs.in/wp-content/uploads
g(){ curl -fsSL "$1" -o "$2" 2>/dev/null && echo "ok      $2" || echo "FAILED  $2  (download it by hand from $1)"; }
g2(){ curl -fsSL "$1" -o "$3" 2>/dev/null || curl -fsSL "$2" -o "$3" 2>/dev/null; [ -s "$3" ] && echo "ok      $3" || echo "FAILED  $3"; }
g2 $B/2022/08/Picture2.png $B/2022/08/Picture2-972x291.png images/home/slide1.png
g2 $B/2022/08/slide_1.png $B/2022/08/slide_1.png images/home/slide2.png
g2 $B/2022/08/slide3.png $B/2022/08/slide3-946x283.png images/home/slide3.png
g2 $B/2022/08/fh1.bmp $B/2022/08/fh1-1280x384.bmp images/home/slide4.bmp
g2 $B/2022/08/slide_5.png $B/2022/08/slide_5.png images/home/slide5.png
g $B/2022/08/S.Chandrasekhar.jpg images/founding-president/chandrasekhar.jpg
g $B/2022/08/Sandeep-Kumar.gif images/council/sandeep-kumar.gif
g $B/2022/08/Yelamaggad.png images/council/yelamaggad.png
g $B/2022/08/Shantanu-K.-Pal.png images/council/s-k-pal.png
g https://cens.res.in/images/People/Faculty/P_Viswanath/P_Viswanath.jpg images/council/viswanath.jpg
g $B/2022/08/President.jpeg images/council/ravindra-dhar.jpeg
g $B/2022/08/K.-K.-Raina.jpeg images/council/k-k-raina.jpeg
g $B/2025/11/Prof_KA_Suresh-scaled.jpeg images/council/k-a-suresh.jpeg
g $B/2022/08/Rajiv-Manohar.png images/council/rajiv-manohar.png
g $B/2022/08/M.-B.-Pandey.png images/council/m-b-pandey.png
g $B/2025/11/Photo_ASA.png images/council/a-s-achalkumar.png
g $B/2025/11/Manjuladevi_BITSPilani.jpg images/council/manjuladevi.jpg
g $B/2022/08/Image.jpg images/gallery/past-conferences/nclc-2001.jpg
g $B/2022/08/Image-3.jpg images/gallery/past-conferences/nclc-2003.jpg
g $B/2022/08/Image-2.jpg images/gallery/past-conferences/nclc-2004.jpg
g $B/2022/08/Image1.jpg images/gallery/past-conferences/nclc-2005.jpg
g $B/2022/09/DSC_3615.jpg images/gallery/past-conferences/nclc-2018-25th.jpg
g $B/2022/08/Image2.jpg images/gallery/past-conferences/photo-6.jpg
g $B/2026/11/ILCS_Nomination_Proforma_with_Guidelines.pdf files/ILCS_Nomination_Proforma_with_Guidelines.pdf
echo "Done. Refresh the website."
