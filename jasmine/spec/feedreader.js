/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });

    describe('The menu', function(){

        /* a test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })


         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('visibility on click', function() {
            const ham = $('.menu-icon-link');
            ham.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // This tests for menu hide.
            ham.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    })

    describe('Initial Entries', function() {

        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('has been called and contain at least one feed.', function() {
            expect($('.entry').length).not.toBe(0);
        });
    });

        
    describe('New Feed Selection', function() {
        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let $feedOne;
        let $feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $('.feed').html();
                done();
            });
        });

        it('has change feed content after loading feed', function(done) {
            loadFeed(1, function() {
                feedTwo = $('.feed').html();
                expect(feedTwo).not.toEqual(feedOne);
                done();
            });
        });
    });
        

    
}());
