<template>
  <div>
    <panel class="py-3 black--text">
      <div class="text-xs-left">
        <div class="bro my-3 red--text">staff code of conduct</div>
        <div class="bro title my-3">general staff obligations:</div>

        <div>
          <ol>
            <li>
              Immediately obey the orders and directions of their Superiors, Managers and the Managing Director of the
              company.
            </li>
            <li>Be smart and tidy in appearance and pay adequate attention to personal hygiene.</li>
            <li>Be polite and courteous to colleagues & customers at all times.</li>
            <li>
              Not swear or make remarks that are personal, tribal, sexual, abusive or which could be judged to be
              offensive in any way.
            </li>
            <li>
              Wear suitable identification as may be requested by FERRARI Courier Limited Logistics &/or our various clients which
              must be visible at all times when on duty.
            </li>
            <li>Not use a mobile phone at any time whilst at work on client’s sites.</li>
            <li>
              Be medically fit to work at all times and must inform Savannah Logistics or site supervisors if they have any
              medical condition which may affect their ability to work.
            </li>
            <li>
              Not consume any alcohol before or during work or working hours (or at any time beforehand on the same
              day). It should be noted that alcohol from drinking the day before can remain in the bloodstream for up to
              24 hours, and that any alcohol can affect concentration, reaction times and judgement.
            </li>
            <v-layout>
              <div class="img">
                <img src="../../assets/images/boots-career-concrete-162540.jpg" alt>
              </div>
            </v-layout>
            <li>
              Not work whilst under the influence of any drugs, nor any medication which may affect their ability to
              operate. This includes both prescription and non-prescription medication. If taking any medication always
              check with your medical practitioner or pharmacist that it is safe to report to work.
            </li>
            <li>
              If a workmate is such that the partner is or may be distracted while at work, he/she must stop and
              continue only when order is restored.
            </li>
            <li>
              Workmates must report any serious work incidents as soon as practicable to their employer giving as
              much detail as possible including the name of any workmate involved in the incident.
            </li>
            <li>Staff must follow the work plans and schedule in accordance with the employer’s specification.</li>
            <li>
              With the exception of demand-responsive call ups, permanent workers must not work at other sites
              other than those on Savannah Logistics’ specified schedule.
            </li>
            <li>If it is difficult to keep to the specified timetable any affected worker must inform their supervisor.</li>
          </ol>
        </div>

        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs8>
              <v-layout px-5>
                <v-flex>
                  <div class="text-xs-left">
                    <div class="py-2 font-weight-bold">
                      <p class="mb-5 subheading font-weight-bold">
                        Savannah Logistics’ Staff must always maintain a strictly professional
                        relationship with customers & workmates. Whilst being helpful, obedient and
                        polite, it is very important that they do not act in any way that could be
                        misunderstood by customers such as calling people by nicknames, receiving or
                        giving gifts to customers or handle money/ look through clients bags/belongs
                        for anything even if asked to
                      </p>

                      <p class="mb-5 subheading font-weight-bold">
                        These instructions have been written to help you understand that your actions,
                        however well intentioned, may be viewed differently by others. It is important
                        to be aware that an allegation made against any Savannah Logistics’ staff may
                        result in an investigation by Savannah Logistics and/or the Police.
                      </p>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex class="text-xs-left" xs4 md4>
              <v-card class="elevation-4 transparent">
                <v-img class="white--text" height="300" :src="image.sample3"></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </panel>
  </div>
</template>
<script>
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      images: [
        {
          title: "Pre-fab homes",
          sample: require("@/assets/images/samplephoto.jpg"),
          flex: 4
        },
        {
          title: "Best airlines",
          sample: require("@/assets/images/samplephoto2.jpg"),
          flex: 4
        },
        {
          title: "Favorite road trips",
          sample: require("@/assets/images/samplephoto3.jpg"),
          flex: 4
        }
      ],
      image: {
        sample: require("@/assets/images/timo-wagner-677183-unsplash.jpg"),
        sample2: require("@/assets/images/shipping.jpg"),
        sample3: require("@/assets/images/architecture-background-blank-158771.jpg"),
        sample4: require("@/assets/images/ban-yido-536186-unsplash.jpg")
      }
    };
  },
  components: {
    Panel
  }
};
</script>
<style scoped>
.img {
  margin-left: -20px;
}
.bro {
  font-family: "Roboto", sans-serif;
  text-transform: capitalize;
  font-size: 28px;
  color: black;
}
ol li {
  margin: 10px 0 10px 0;
  font-weight: 500;
}
</style>
