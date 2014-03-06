/****************************************************************************
 Copyright (c) 2013 cocos2d-x.org

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var UIScrollViewTest_Vertical = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("Move by vertical direction");
            this._topDisplayLabel.x = widgetSize.width / 2.0;
            this._topDisplayLabel.y = widgetSize.height / 2.0 + this._topDisplayLabel.height * 1.5;
            this._bottomDisplayLabel.setText("ScrollView");
            this._bottomDisplayLabel.x = widgetSize.width / 2;
            this._bottomDisplayLabel.y = widgetSize.height / 2 - this._bottomDisplayLabel.height * 3;

            var background = this._widget.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setDirection(ccui.SCROLLVIEW_DIR_VERTICAL);
            scrollView.setTouchEnabled(true);
            scrollView.setSize(cc.size(280, 150));

            scrollView.x = (widgetSize.width - background.width) / 2 + (background.width - scrollView.width) / 2;
            scrollView.y = (widgetSize.height - background.height) / 2 + (background.height - scrollView.height) / 2;
            this._mainNode.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/ccicon.png");

            var innerWidth = scrollView.width;
            var innerHeight = scrollView.height + imageView.height;

            scrollView.setInnerContainerSize(cc.size(innerWidth, innerHeight));

            var button = ccui.Button.create();
            button.setTouchEnabled(true);
            button.loadTextures("res/cocosgui/animationbuttonnormal.png", "res/cocosgui/animationbuttonpressed.png", "");
            button.x = innerWidth / 2;
            button.y = scrollView.getInnerContainerSize().height - button.height / 2;
            scrollView.addChild(button);

            var textButton = ccui.Button.create();
            textButton.setTouchEnabled(true);
            textButton.loadTextures("res/cocosgui/backtotopnormal.png", "res/cocosgui/backtotoppressed.png", "");
            textButton.setTitleText("Text Button");
            textButton.x = innerWidth / 2;
            textButton.y = button.getBottomInParent() - button.height;
            scrollView.addChild(textButton);

            var button_scale9 = ccui.Button.create();
            button_scale9.setTouchEnabled(true);
            button_scale9.setScale9Enabled(true);
            button_scale9.loadTextures("res/cocosgui/button.png", "res/cocosgui/buttonHighlighted.png", "");
            button_scale9.width = 100;
	        button_scale9.height = button_scale9.height;
            button_scale9.x = innerWidth / 2;
            button_scale9.y = textButton.getBottomInParent() - textButton.height;
            scrollView.addChild(button_scale9);

            imageView.x = innerWidth / 2;

            imageView.y = imageView.height / 2;
            scrollView.addChild(imageView);

            return true;
        }
        return false;
    }
});

var UIScrollViewTest_Horizontal = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("Move by horizontal direction");
            this._topDisplayLabel.x = widgetSize.width / 2.0;
            this._topDisplayLabel.y = widgetSize.height / 2.0 + this._topDisplayLabel.height * 1.5;
            this._bottomDisplayLabel.setText("ScrollView");
            this._bottomDisplayLabel.x = widgetSize.width / 2;
            this._bottomDisplayLabel.y = widgetSize.height / 2 - this._bottomDisplayLabel.height * 3;

            var background = this._widget.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setDirection(ccui.SCROLLVIEW_DIR_HORIZONTAL);
            scrollView.setTouchEnabled(true);
            scrollView.setSize(cc.size(280, 150));
            var scrollViewRect = scrollView.getSize();
            scrollView.setInnerContainerSize(cc.size(scrollViewRect.width,scrollViewRect.height));

            scrollView.x = (widgetSize.width - background.width) / 2 + (background.width - scrollViewRect.width) / 2;
            scrollView.y = (widgetSize.height - background.height) / 2 + (background.height - scrollViewRect.height) / 2;
            this._mainNode.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/ccicon.png");

            var innerWidth = scrollViewRect.width + imageView.getSize().width;
            var innerHeight = scrollViewRect.height;

            scrollView.setInnerContainerSize(cc.size(innerWidth, innerHeight));

            var button = ccui.Button.create();
            button.setTouchEnabled(true);
            button.loadTextures("res/cocosgui/animationbuttonnormal.png", "res/cocosgui/animationbuttonpressed.png", "");
            button.x = button.width / 2;
            button.y = scrollView.getInnerContainerSize().height - button.height / 2;
            scrollView.addChild(button);

            var textButton = ccui.Button.create();
            textButton.setTouchEnabled(true);
            textButton.loadTextures("res/cocosgui/backtotopnormal.png", "res/cocosgui/backtotoppressed.png", "");
            textButton.setTitleText("Text Button");
            textButton.x = button.getRightInParent() + button.width / 2;
            textButton.y = button.getBottomInParent() - button.height;
            scrollView.addChild(textButton);

            var button_scale9 = ccui.Button.create();
            button_scale9.setTouchEnabled(true);
            button_scale9.setScale9Enabled(true);
            button_scale9.loadTextures("res/cocosgui/button.png", "res/cocosgui/buttonHighlighted.png", "");
            button_scale9.width = 100;
            button_scale9.height = button_scale9.getContentSize().height;
            button_scale9.x = textButton.getRightInParent() + textButton.width / 2;
            button_scale9.y = textButton.getBottomInParent() - textButton.height;
            scrollView.addChild(button_scale9);

            imageView.x = innerWidth - imageView.width / 2;
	        imageView.y = button_scale9.getBottomInParent() - button_scale9.height / 2;
            scrollView.addChild(imageView);

            return true;
        }
        return false;
    }
});

var UIScrollViewTest_Both = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("Move by any direction");
            this._topDisplayLabel.x = widgetSize.width / 2.0;
            this._topDisplayLabel.y = widgetSize.height / 2.0 + this._topDisplayLabel.height * 1.5;
            this._bottomDisplayLabel.setText("ScrollView both");
            this._bottomDisplayLabel.x = widgetSize.width / 2;
            this._bottomDisplayLabel.y = widgetSize.height / 2 - this._bottomDisplayLabel.height * 3;

            var background = this._widget.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setDirection(ccui.SCROLLVIEW_DIR_BOTH);
            scrollView.setTouchEnabled(true);
            scrollView.setBounceEnabled(true);
            scrollView.setBackGroundImageScale9Enabled(true);
            scrollView.setBackGroundImage("res/cocosgui/green_edit.png");
            scrollView.setSize(cc.size(210, 122));
            var scrollViewSize = scrollView.getSize();

            scrollView.x = (widgetSize.width - background.width) / 2 + (background.width - scrollViewSize.width) / 2;
            scrollView.y = (widgetSize.height - background.height) / 2 + (background.height - scrollViewSize.height) / 2;
            this._mainNode.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/b11.png");
            scrollView.addChild(imageView);

            scrollView.setInnerContainerSize(cc.size(imageView.width, imageView.height));
            imageView.x = imageView.width/2;
            imageView.y = imageView.height/2;

            return true;
        }
        return false;
    }
});

var UIScrollViewTest_ScrollToPercentBothDirection = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText("ScrollView scroll to percent both directrion");
            this._bottomDisplayLabel.x = widgetSize.width / 2;
            this._bottomDisplayLabel.y = widgetSize.height / 2 - this._bottomDisplayLabel.height * 3;

            var background = this._widget.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setTouchEnabled(true);
            scrollView.setBackGroundColor(cc.color.GREEN);
            scrollView.setBackGroundColorType(ccui.LAYOUT_BG_COLOR_SOLID);
            scrollView.setDirection(ccui.SCROLLVIEW_DIR_BOTH);
            scrollView.setInnerContainerSize(cc.size(480, 320));
            scrollView.setSize(cc.size(100, 100));
            var scrollViewSize = scrollView.getSize();

            scrollView.x = (widgetSize.width - background.width) / 2 + (background.width - scrollViewSize.width) / 2;
            scrollView.y = (widgetSize.height - background.height) / 2 + (background.height - scrollViewSize.height) / 2;
            scrollView.scrollToPercentBothDirection(cc.p(50, 50), 1, true);

            this._mainNode.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/Hello.png");
            imageView.x = 240;
            imageView.y = 160;
            scrollView.addChild(imageView);

            return true;
        }
        return false;
    }
});

var UIScrollViewTest_ScrollToPercentBothDirection_Bounce = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText("ScrollView scroll to percent both directrion bounce");
            this._bottomDisplayLabel.x = widgetSize.width / 2;
            this._bottomDisplayLabel.y = widgetSize.height / 2 - this._bottomDisplayLabel.height * 3;

            var background = this._widget.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setTouchEnabled(true);
            scrollView.setBounceEnabled(true);
            scrollView.setBackGroundColor(cc.color.GREEN);
            scrollView.setBackGroundColorType(ccui.LAYOUT_BG_COLOR_SOLID);
            scrollView.setDirection(ccui.SCROLLVIEW_DIR_BOTH);
            scrollView.setInnerContainerSize(cc.size(480, 320));
            scrollView.setSize(cc.size(100, 100));
            var scrollViewSize = scrollView.getSize();

            scrollView.x = (widgetSize.width - background.width) / 2 + (background.width - scrollViewSize.width) / 2;
            scrollView.y = (widgetSize.height - background.height) / 2 + (background.height - scrollViewSize.height) / 2;
            scrollView.scrollToPercentBothDirection(cc.p(50, 50), 1, true);

            this._mainNode.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/Hello.png");
            imageView.x = 240;
            imageView.y = 160;
            scrollView.addChild(imageView);

            return true;
        }
        return false;
    }
});
