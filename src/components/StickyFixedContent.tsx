import React, {useEffect, useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import styles from "./styles";
function StickyFixedContent() {
   const [sidebarWidth, setSidebarWidth] = useState(undefined);
   const [sidebarTop, setSidebarTop]: any = useState(undefined);

   useEffect(() => {
      let sidebarElement: any = document.querySelector('.sidebar');
      let sidebarElementShape = sidebarElement.getBoundingClientRect();
      setSidebarWidth(sidebarElementShape.width);
      setSidebarTop(sidebarElementShape.top);
   }, []);

   useEffect(() => {
      if (!sidebarTop) return;
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [sidebarTop]);

   const handleScroll = () => {
      const sidebarElement: any = document.querySelector('.sidebar');
      const pageScrollTop = window.scrollY;
      // check if the user has scrolled past the top of the .sidebar element
      if (pageScrollTop >= sidebarTop) {
         // select the .content-container element and log its offsetTop
         const contentContainer: any = document.querySelector(".content-container");
         // check if the user has scrolled past the bottom of the .content-container element
         if (pageScrollTop >= (contentContainer.offsetTop + contentContainer.offsetHeight - window.innerHeight)) {
            sidebarElement.classList.remove('sticky');
         } else {
            sidebarElement.classList.add('sticky');
         }
      } else {
         sidebarElement.classList.remove('sticky');
      }
   }
   
   return (
      <Box sx={styles.rootContainer}>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <Box sx={styles.header}>
                  <Typography>Header</Typography>
               </Box>
            </Grid>
            <Grid item xs={4}>
               <Box sx={styles.sidebar(sidebarWidth)} className="sidebar">
                  <Typography>Link or Filter Options</Typography>
                  <Typography>Link or Filter Options</Typography>
                  <Typography>Link or Filter Options</Typography>
                  <Typography>Link or Filter Options</Typography>
               </Box>
            </Grid>
            <Grid item xs={8} p={2} className="content-container">
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
               <Typography>
                  An article is any member of a class of dedicated words that are
                  used with noun phrases to mark the identifiability of the referents
                  of the noun phrases. The category of articles constitutes a part of speech.
                  In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases.
                  Articles typically specify the grammatical definiteness of the noun phrase, but in many languages,
                  they carry additional grammatical information such as gender, number, and case. Articles are part of
                  a broader category called determiners, which also include demonstratives,
                  possessive determiners, and quantifiers.
                  In linguistic interlinear glossing,
                  articles are abbreviated as art
               </Typography>
            </Grid>
            <Grid item xs={12}>
               <Box sx={styles.footer}>
                  <Typography>Footer</Typography>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

export default StickyFixedContent