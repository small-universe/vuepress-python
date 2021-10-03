__author__ = "nanci"
# !/usr/bin/env python
# -*- coding:utf-8 -*-
"""
简单工厂模式
"""


# 1、抽象产品角色:所有产品的基类
class BaseProduct(object):
    def __init__(self, product_type, number=0, price=0):
        self.product_type = product_type
        self.number = number
        self.price = price

    def total_price(self):
        print('产品{}总价：{}'.format(self.product_type, self.number * self.price))


# 2、具体产品角色:继承自抽象产品,实现扩展
class ProductA(BaseProduct):
    def total_price(self):
        total = self.number * self.price
        reduce = 2.2
        print('产品{} 原价：{} 优惠:{} 合计：{}'.format(self.product_type, total, reduce, total - reduce))


class ProductB(BaseProduct):
    def total_price(self):
        total = self.number * self.price
        discount = 0.95
        print('产品%s 原价：%d 折扣：%0.2f 合计：%0.2f' % (self.product_type, total, discount, total * discount))


# 3、工厂类角色
class Factory(object):
    @staticmethod
    def yield_product(product_type, **kwargs) -> BaseProduct:
        if product_type == 'A':
            return ProductA('A', **kwargs)
        if product_type == 'B':
            return ProductB('B', **kwargs)


class Client(object):
    """
    客户端
    """

    def get_product(self, product_type, number, price):
        """
        获取到具体的产品对象
        :param product_type:
        :param number:
        :param price:
        :return:
        """
        return Factory.yield_product(product_type, number=number, price=price)


if __name__ == '__main__':
    product = Client().get_product('A', number=3, price=4)
    product.total_price()

    product = Client().get_product('B', number=8, price=4)
    product.total_price()
