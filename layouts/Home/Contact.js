import { socials } from "lib/constants";
import Section from "Components/Section";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useSocialStyles = makeStyles(
  ({}) => ({
    section: {
      height: 325,
      paddingTop: 128,
      paddingBottom: 64,
    },
  }),
  { name: "ContactSection" }
);

const Contact = () => {
  const styles = useSocialStyles();
  return (
    <Section
      id="contact"
      container
      direction="column"
      className={styles.section}
    >
      <Grid
        container
        alignItems="flex-end"
        justifyContent="center"
        style={{ height: "100%" }}
      >
        <Grid
          xs={12}
          item
          container
          spacing={2}
          alignItems="flex-end"
          justifyContent="center"
        >
          {socials.map((social) => {
            const { Icon, link, name } = social;

            return (
              <Grid item key={link}>
                <IconButton
                  href={link}
                  component="a"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name.toLowerCase()}-project-link`}
                >
                  {Icon}
                </IconButton>
              </Grid>
            );
          })}
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color="textSecondary">
            Created by Victor Ragojos
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Contact;
