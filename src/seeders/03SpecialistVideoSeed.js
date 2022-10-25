'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('specialist_videos', [
      {
        name: 'A',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686015/mixkit-girl-stretching-her-body-before-exercising-in-a-park-40761-medium_fjp9po.mp4',
        video_status: 'Public',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '1',
      },
      {
        name: 'B',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686013/video_preview_h264_1_rnimts.mp4',
        video_status: 'Public',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '1',
      },
      {
        name: 'C',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686027/mixkit-fitness-girl-stretching-her-legs-on-a-mat-36907-medium_y9zmha.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '1',
      },
      {
        name: 'D',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686020/mixkit-woman-exercising-in-her-living-room-42898-medium_itsfjr.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '1',
      },
      {
        name: 'E',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686019/mixkit-woman-doing-stretching-exercises-at-a-park-40133-medium_idl2xr.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '1',
      },
      {
        name: 'Yoga AA',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686238/mixkit-woman-doing-yoga-on-the-grass-14619-medium_1_c80woz.mp4',
        video_status: 'Public',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '2',
      },
      {
        name: 'Yoga BB',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686223/video_preview_h264_3_cehg0g.mp4',
        video_status: 'Public',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '2',
      },
      {
        name: 'Yoga CC',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686220/video_preview_h264_jvhdq5.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '2',
      },
      {
        name: 'Yoga DD',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686219/video_preview_h264_2_hxbwaj.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '2',
      },
      {
        name: 'Yoga EE',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686217/video_preview_h264_1_esdv93.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '2',
      },
      {
        name: 'jump rope A',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686162/video_preview_h264_iozw8f.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '5',
      },
      {
        name: 'jump rope B',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686174/mixkit-man-using-a-jump-rope-11537-medium_a3dm4s.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '5',
      },
      {
        name: 'jump rope C',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686185/mixkit-boxer-using-a-jumping-rope-11755-medium_ecs8xb.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '5',
      },
      {
        name: 'jump rope D',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686184/mixkit-man-exercising-hard-with-a-pair-of-ropes-38697-medium_zt5zzc.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '5',
      },
      {
        name: 'jump rope E',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686188/mixkit-man-climbing-a-rope-11536-medium_ueodha.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '5',
      },
      {
        name: 'boxing A ',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686104/mixkit-man-training-with-punching-bag-in-the-gym-23100-medium_adffxz.mp4',
        video_status: 'Public',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '6',
      },
      {
        name: 'boxing B',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686119/mixkit-man-training-with-gloves-in-boxing-ring-13311-medium_tqyuhg.mp4',
        video_status: 'Public',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '6',
      },
      {
        name: 'boxing C',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686133/mixkit-boxer-training-outdoors-40145-medium_v2n6sx.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '6',
      },
      {
        name: 'boxing D',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686107/video_preview_h264_edlt66.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '6',
      },
      {
        name: 'boxing E',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686100/video_preview_h264_1_ra0oyx.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '6',
      },
      {
        name: 'weight lifting A ',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686065/mixkit-fitness-man-training-in-the-gym-29882-medium_rjw5zo.mp4',
        video_status: 'Public',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '7',
      },
      {
        name: 'weight lifting B',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686051/video_preview_h264_3_wsdy33.mp4',
        video_status: 'Public',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '7',
      },
      {
        name: 'weight lifting C',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686063/mixkit-athletic-man-doing-reps-with-a-large-dumbbell-40788-medium_lqqkvo.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '7',
      },
      {
        name: 'weight lifting D',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666686067/mixkit-shirtless-bodybuilder-training-in-the-gym-29883-medium_fyz202.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '7',
      },
      {
        name: 'weight lifting E',
        video_files:
          'https://res.cloudinary.com/waniga/video/upload/v1666689726/mixkit-bodybuilder-doing-chest-exercises-in-the-gym-29885-medium_whpibp.mp4',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '7',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
